import { Routes, Route } from "react-router-dom";

//pages
import App from "../App";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import DetailsPage from "../pages/DetailsPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";

const Paths = () => {
  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<ProductsPage />} />
        <Route element={<DetailsPage />} path="products/:id" />
        <Route element={<CartPage />} path="cart" />
        <Route element={<CheckoutPage />} path="checkout" />
        <Route element={<LoginPage />} path="login" />
        <Route element={<RegisterPage />} path="register" />

        <Route element={<ProfilePage />} path="profile"></Route>
      </Route>
    </Routes>
  );
};

export default Paths;
