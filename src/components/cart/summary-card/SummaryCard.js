import { useNavigate } from "react-router-dom";

//components
import SharedButton from "../../shared/shared-button/SharedButton";
import TableBody from "./table-body/TableBody";

//react icons
import { FaDollarSign } from "react-icons/fa";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./SummaryCard.module.scss";

const SummaryCard = () => {
  const navigate = useNavigate();
  const { shoppingCart } = useSelector((state) => state.shop);

  const checkoutHandler = () => {
    navigate("/checkout", { replace: true });
  };

  const total = shoppingCart.reduce((arr, item) => {
    arr = arr + item.subtotal;
    return arr;
  }, 0);

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Cart Summary</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart?.length > 0 &&
            shoppingCart.map((item) => {
              return <TableBody key={item.id} item={item} />;
            })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td className={styles.total}>Total: ${total}</td>
            <td>
              <SharedButton
                buttonStyle={"success"}
                tip={""}
                clickHandler={checkoutHandler}
              >
                <FaDollarSign />
                Payment
              </SharedButton>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SummaryCard;
