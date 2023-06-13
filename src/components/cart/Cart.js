//components
import CartCard from "./cart-card/CartCard";
import SummaryCard from "./summary-card/SummaryCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Cart.module.scss";
import { Fragment } from "react";

const Cart = () => {
  const { shoppingCart } = useSelector((state) => state.carts);
  console.log(shoppingCart?.length);
  return (
    <div className={styles.container}>
      {shoppingCart?.length > 0 && (
        <Fragment>
          <div className={styles.item_one}>
            {shoppingCart.map((item) => {
              return <CartCard key={item.id} item={item} />;
            })}
          </div>
          <div className={styles.item_two}>
            <SummaryCard />
          </div>
        </Fragment>
      )}
      {!shoppingCart?.length && <h3 className={styles.empty}>Cart Is Empty</h3>}
    </div>
  );
};

export default Cart;
