//components
import CartCard from "./cart-card/CartCard";
import SummaryCard from "./summary-card/SummaryCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const { shoppingCart } = useSelector((state) => state.carts);
  return (
    <div className={styles.container}>
      <div className={styles.item_one}>
        {shoppingCart?.length > 0 &&
          shoppingCart.map((item) => {
            return <CartCard key={item.id} item={item} />;
          })}
      </div>
      <div className={styles.item_two}>
        <SummaryCard />
      </div>
    </div>
  );
};

export default Cart;
