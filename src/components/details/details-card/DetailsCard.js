import { useState } from "react";

//components
import SharedButton from "../../shared/shared-button/SharedButton";
import SharedQuantityGroup from "../../shared/shared-quantity-group/SharedQuantityGroup";

//react icons
import { FaCartPlus, FaHeart } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { postShoppingCart } from "../../../firebase/services/shopping-cart-service";
import { postWishList } from "../../../firebase/services/wish-cart-service";

//styles
import styles from "./DetailsCard.module.scss";
import { DateTime } from "luxon";

const DetailsCard = () => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.auth);
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

  const shoppingCartHandler = () => {
    const post = {
      brand,
      category,
      description,
      id,
      mainPic,
      price,
      quantity: parseInt(quantity),
      rating,
      stock,
      subtotal: parseInt(quantity) * price,
      title,
    };

    dispatch(postShoppingCart(post, loggedUser.id));
  };

  const wishListHandler = () => {
    const post = {
      brand,
      category,
      date: DateTime.now().toFormat("MM-dd-yyyy"),
      description,
      id,
      mainPic,
      price,
      quantity: parseInt(quantity),
      rating,
      stock,
      title,
    };

    dispatch(postWishList(post, loggedUser.id));
  };

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
            <SharedButton
              buttonStyle={"success"}
              clickHandler={shoppingCartHandler}
              tip={"Add to Cart"}
            >
              <FaCartPlus />
            </SharedButton>
            <SharedButton
              buttonStyle={"warning"}
              clickHandler={wishListHandler}
              tip={"Add to Wish"}
            >
              <FaHeart />
            </SharedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
