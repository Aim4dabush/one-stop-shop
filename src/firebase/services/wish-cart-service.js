import { setWishList } from "../../redux/slices/cartsSlice";

//firebase
import { realtimeDB } from "../firebaseConfig";

//realtime database
import { get, onValue, ref, update } from "firebase/database";

export const deleteItem = (productId, userId) => {
  return async (dispatch) => {
    let list = [];
    const wishRef = ref(realtimeDB, `users/${userId}/carts`);
    try {
      const result = await get(wishRef);

      if (!result.exists()) {
        throw new Error("Nothing to delete");
      }

      list = result.val().wish_list;
      const newCart = list.reduce((arr, item) => {
        if (item.id === productId) {
          return [...arr];
        } else {
          return [...arr, item];
        }
      }, []);

      update(wishRef, { wish_list: newCart });
    } catch (err) {
      alert(err.message);
    }
  };
};

export const getWishList = (userId) => {
  return (dispatch) => {
    let list = [];
    const wishRef = ref(realtimeDB, `users/${userId}/carts`);

    try {
      onValue(wishRef, (result) => {
        if (!result.exists()) {
          dispatch(setWishList(list));
          return;
        }

        list = result.val().wish_list;
        dispatch(setWishList(list));
      });
    } catch (err) {
      alert(err.message);
    }
  };
};

export const postWishList = (data, userId) => {
  return async (dispatch) => {
    let wish_list = [];
    const wishRef = ref(realtimeDB, `users/${userId}/carts`);
    try {
      const result = await get(wishRef);
      if (!result.exists().wish_list) {
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
    } catch (err) {
      alert(err.message);
    }
  };
};
