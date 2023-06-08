import { setShoppingCart } from "../../redux/slices/shoppingCartSlice";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { get, onValue, ref, update } from "firebase/database";

export const deleteItem = (productId, userId) => {
  return async (dispatch) => {
    let list = [];
    const shopRef = ref(realtimeDB, `users/${userId}/carts`);
    try {
      const result = await get(shopRef);

      if (!result.exists()) {
        throw new Error("Nothing to delete");
      }

      list = result.val().shopping_cart;
      const newCart = list.reduce((arr, item) => {
        if (item.id === productId) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);

      update(shopRef, { shopping_cart: newCart });
    } catch (err) {
      alert(err.message);
    }
  };
};

export const getShoppingCart = (userId) => {
  return async (dispatch) => {
    let list = [];
    const shopRef = ref(realtimeDB, `users/${userId}/carts`);

    onValue(shopRef, (result) => {
      if (!result.exists()) {
        dispatch(setShoppingCart(list));
        return;
      }

      list = result.val().shopping_cart;
      dispatch(setShoppingCart(list));
    });
  };
};

export const postShoppingCart = (data, userId) => {
  return async (dispatch) => {
    let shopping_cart = [];
    const shopRef = ref(realtimeDB, `users/${userId}/carts`);
    try {
      const result = await get(shopRef);
      if (!result.exists()) {
        shopping_cart.push(data);
        update(shopRef, { shopping_cart });
        return;
      }

      shopping_cart = result.val().shopping_cart;
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
        console.log(newCart);
      }

      update(shopRef, { shopping_cart: newCart });
    } catch (err) {
      alert(err.message);
    }
  };
};
