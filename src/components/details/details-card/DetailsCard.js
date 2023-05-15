import { useState } from "react";

//components
import SharedButton from "../../shared/shared-button/SharedButton";
import SharedQuantityGroup from "../../shared/shared-quantity-group/SharedQuantityGroup";

//react icons
import { FaCartPlus, FaHeart } from "react-icons/fa";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./DetailsCard.module.scss";

const DetailsCard = () => {
  const {
    brand,
    category,
    description,
    id,
    images,
    mainPic,
    price,
    rating,
    stock,
    title,
  } = useSelector((state) => state.products.product);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.card}>
      <div className={styles.titleWrapper}>
        <h5>{brand}</h5>
        <h1>{title}</h1>
        <h5>{category}</h5>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <img src={mainPic} alt={title} />
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.row}>
            <p>{description}</p>
          </div>
          <div className={`${styles.row} ${styles.otherInfo}`}>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <p>Price: ${price}</p>
            <SharedQuantityGroup setValue={setQuantity} value={1} />
          </div>
          <div className={`${styles.row} ${styles.actions}`}>
            <SharedButton buttonStyle={"success"} tip={"Add to Cart"}>
              <FaCartPlus />
            </SharedButton>
            <SharedButton buttonStyle={"warning"} tip={"Add to Wish"}>
              <FaHeart />
            </SharedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
