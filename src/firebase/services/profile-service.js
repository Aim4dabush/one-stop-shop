import { setInfo } from "../../redux/slices/profileSlice";

//firebase
import { app } from "../firebaseConfig";

//realtime database
import { getDatabase, onValue, ref, update } from "firebase/database";

const realtimeDB = getDatabase(app);

export const getProfile = (userId) => {
  return (dispatch) => {
    const profileRef = ref(realtimeDB, `users/${userId}/profile`);
    let info = {};
    onValue(profileRef, (result) => {
      try {
        if (!result.val()) {
          dispatch(setInfo(info));
          return;
        }

        info = result.val();
        dispatch(setInfo(info));
      } catch (err) {
        alert(err.message);
      }
    });
  };
};

export const postProfile = (data) => {
  return async (dispatch) => {
    const profileRef = ref(realtimeDB, `users/${data.id}/profile`);
    const general = {
      birthday: data.birthday ? data.birthday : "",
      email: data.email ? data.email : "",
      name: data.name ? data.name : "",
      phone: data.phone ? data.phone : "",
    };
    const address = {
      city: data.city ? data.city : "",
      state: data.state ? data.state : "",
      street: data.street ? data.street : "",
      zip: data.zip ? data.zip : "",
    };

    try {
      await update(profileRef, { general });
      await update(profileRef, { address });
    } catch (err) {
      alert(err.message);
    }

    dispatch(getProfile(data.id));
  };
};
