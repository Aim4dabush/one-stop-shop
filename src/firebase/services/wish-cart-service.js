import { setWishListCart } from "../../redux/slices/wishListSlice";

//firebase
import { app } from "../firebaseConfig";

//realtime database
import { get, getDatabase, onValue, ref, update } from "firebase/database";

const user = JSON.parse(localStorage.getItem("user"));
const realtimeDB = getDatabase(app);
const wishRef = ref(realtimeDB, `users/${user?.id}/carts`);

export const deleteItem = (id) => {
  return async (dispatch) => {
    let list = [];
    try {
      const result = await get(wishRef);

      if (!result.exists()) {
        throw new Error("Nothing to delete");
      }

      list = result.val().wish_list;
      const newCart = list.reduce((arr, item) => {
        if (item.id === id) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);

      update(wishRef, { wish_list: newCart });
      dispatch(getWishList(""));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const getWishList = (id) => {
  return async (dispatch) => {
    let list = [];
    if (id) {
      try {
        const result = await get(ref(realtimeDB, `users/${id}/carts`));

        if (!result.exists()) {
          return;
        }

        list = result.val().wish_list;
        dispatch(setWishListCart(list));
      } catch (err) {
        console.log(err);
      }
    } else {
      onValue(wishRef, (result) => {
        if (!result.exists()) {
          dispatch(setWishListCart(list));
          return;
        }

        list = result.val().wish_list;
        dispatch(setWishListCart(list));
      });
    }
  };
};

export const postWishList = (data) => {
  return async (dispatch) => {
    let wish_list = [];
    try {
      const result = await get(wishRef);
      if (!result.exists()) {
        wish_list.push(data);
        update(wishRef, { wish_list });
        return;
      }

      wish_list = result.val().wish_list;
      let duplicate = false;
      const newCart = wish_list.reduce((arr, item) => {
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

      update(wishRef, { wish_list: newCart });
      dispatch(getWishList(""));
    } catch (err) {
      alert(err.message);
    }
  };
};
