import { setShoppingCart } from "../../redux/slices/shoppingCartSlice";

//firebase
import { app } from "../firebaseConfig";

//realtime database
import { get, getDatabase, onValue, ref, update } from "firebase/database";

const user = JSON.parse(localStorage.getItem("user"));
const realtimeDB = getDatabase(app);
const shopRef = ref(realtimeDB, `users/${user?.id}/carts`);

export const deleteItem = (id) => {
  return async (dispatch) => {
    let list = [];
    try {
      const result = await get(shopRef);

      if (!result.exists()) {
        throw new Error("Nothing to delete");
      }

      list = result.val().shopping_cart;
      const newCart = list.reduce((arr, item) => {
        if (item.id === id) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);

      update(shopRef, { shopping_cart: newCart });
      dispatch(getShoppingCart(""));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const getShoppingCart = (id) => {
  return async (dispatch) => {
    let list = [];
    if (id) {
      try {
        const result = await get(ref(realtimeDB, `users/${id}/carts`));

        if (!result.exists()) {
          return;
        }

        list = result.val().shopping_cart;
        dispatch(setShoppingCart(list));
      } catch (err) {
        console.log(err);
      }
    } else {
      onValue(shopRef, (result) => {
        if (!result.exists()) {
          dispatch(setShoppingCart(list));
          return;
        }

        list = result.val().shopping_cart;
        dispatch(setShoppingCart(list));
      });
    }
  };
};

export const postShoppingCart = (data) => {
  return async (dispatch) => {
    let shopping_cart = [];
    try {
      const result = await get(shopRef);
      if (!result.exists()) {
        shopping_cart.push(data);
        update(shopRef, { shopping_cart });
        return;
      }

      shopping_cart = result.val().wish_list;
      let duplicate = false;
      const newCart = shopping_cart.reduce((arr, item) => {
        if (item.id === data.id) {
          duplicate = true;
          return [...arr, data];
        } else {
          return [...arr, item];
        }
      }, []);

      if (!duplicate) {
        newCart.push(data);
      }

      update(shopRef, { shopping_cart: newCart });
      dispatch(getShoppingCart(""));
    } catch (err) {
      alert(err.message);
    }
  };
};
