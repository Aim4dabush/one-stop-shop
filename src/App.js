import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";

//components
import NavBar from "./components/nav-bar/NavBar";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { getProfile } from "./firebase/services/profile-service";
import { getShoppingCart } from "./firebase/services/shopping-cart-service";
import { getWishList } from "./firebase/services/wish-cart-service";

//styles
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loggedUser.id) {
      dispatch(getProfile(loggedUser.id));
      dispatch(getShoppingCart(loggedUser.id));
      dispatch(getWishList(loggedUser.id));
    }
  }, [dispatch, loggedUser.id]);
  return (
    <Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
