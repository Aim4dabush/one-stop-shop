//styles
import styles from "./CartList.module.scss";

const CartList = ({ cart, total }) => {
  return (
    <div className={styles.cart_list_container}>
      <h1>Purchase Summary</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.title}</th>
                <th>{item.quantity}</th>
                <th>{item.price}</th>
                <th>{item.subtotal}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className={styles.total}>Total: ${total}</p>
    </div>
  );
};

export default CartList;
