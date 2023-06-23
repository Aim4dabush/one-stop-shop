//components
import CartList from "./cart-list/CartList";
import OrderInfo from "./order-info/OrderInfo";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const { shoppingCart } = useSelector((state) => state.carts);
  const total = shoppingCart.reduce((arr, item) => {
    arr = arr + item.price;
    return arr;
  }, 0);

  return (
    <div className={styles.container}>
      <CartList cart={shoppingCart} total={total} />
      <OrderInfo cart={shoppingCart} total={total} />
    </div>
  );
};

export default Checkout;
