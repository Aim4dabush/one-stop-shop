import { useNavigate } from "react-router-dom";

//components
import SharedButton from "../../shared/shared-button/SharedButton";

//styles
import styles from "./ProductsCard.module.scss";

const ProductsCard = ({ brand, category, id, image, price, stock, title }) => {
  const navigate = useNavigate();
  const viewDetailsHandler = () => {
    navigate(`/products/${id}`, { replace: true });
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.infoWrapper}>
          <p>{brand}</p>
          <div className={styles.row}>
            <p className={styles.category}>{category}</p>
            <p>
              ${price} <span className={styles.stock}>(Stock: {stock})</span>
            </p>
          </div>
        </div>
      </div>

      <SharedButton buttonStyle={"secondary"} clickHandler={viewDetailsHandler}>
        View Details
      </SharedButton>
    </div>
  );
};

export default ProductsCard;
