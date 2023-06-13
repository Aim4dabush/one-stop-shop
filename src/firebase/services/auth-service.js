import {
  setLoggedUser,
  setLoggedUserReset,
  setRegistered,
} from "../../redux/slices/authSlice";
import {
  setProductReset,
  setProductsReset,
} from "../../redux/slices/productsSlice";
import { setShoppingCartReset } from "../../redux/slices/shoppingCartSlice";
import { setWishListCartReset } from "../../redux/slices/wishListSlice";

//authentication
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

//firebase
import { auth } from "../firebaseConfig";

//luxon
import { DateTime } from "luxon";

//services
import { postProfile } from "./profile-service";

export const signup = (data) => {
  return async (dispatch) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      if (!result.user.uid) {
        throw new Error("Problem with creating a new user");
      }

      const user = result.user;
      dispatch(setRegistered(user.uid));
      updateProfile(user, {
        displayName: data.name,
        phoneNumber: data.phone,
      });

      const postData = {
        birthday: data.birthday,
        email: data.email,
        name: data.name,
        phone: data.phone,
        id: user.uid,
      };
      dispatch(postProfile(postData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const login = (loginInfo) => {
  return async (dispatch) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );

      if (!result.user.uid) {
        throw new Error("Problem getting user credentials");
      }

      const user = await result.user.getIdTokenResult();

      if (!user.token) {
        throw new Error("Problem with getting user token");
      }

      const date = new Date(user.claims.exp);
      const fbExp = DateTime.fromJSDate(date).plus({ hours: 1 }).toFormat("x");

      const loginCredentials = {
        id: user.claims.user_id,
        expires: fbExp,
        token: user.token,
      };

      localStorage.setItem("user", JSON.stringify(loginCredentials));
      dispatch(setLoggedUser(loginCredentials));
      alert("Logged In Successfully");
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    signOut(auth);
    dispatch(setLoggedUserReset());
    dispatch(setProductReset());
    dispatch(setProductsReset());
    dispatch(setShoppingCartReset());
    dispatch(setWishListCartReset());
    localStorage.clear();
    alert("Logged Off Successfully");
  };
};
