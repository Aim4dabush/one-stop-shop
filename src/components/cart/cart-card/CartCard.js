import { useState } from "react";

//components
import SharedButton from "../../shared/shared-button/SharedButton";
import SharedQuantityGroup from "../../shared/shared-quantity-group/SharedQuantityGroup";

//react icons
import { FaTrashAlt, FaUndo } from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import {
  deleteItem,
  postShoppingCart,
} from "../../../firebase/services/shopping-cart-service";

//styles
import styles from "./CartCard.module.scss";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.auth);
  const [quantity, setQuantity] = useState(item?.quantity);

  const deleteShoppingCart = () => {
    dispatch(deleteItem(item.id, loggedUser.id));
  };

  const updateShoppingCart = () => {
    const post = {
      brand: item.brand,
      category: item.category,
      description: item.description,
      id: item.id,
      mainPic: item.mainPic,
      price: item.price,
      quantity,
      rating: item.rating,
      stock: item.stock,
      subtotal: quantity * item.price,
      title: item.title,
    };
    dispatch(postShoppingCart(post, loggedUser.id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.title_wrapper}>
        <h5>{item?.brand}</h5>
        <h1>{item?.title}</h1>
        <h5>{item?.category}</h5>
      </div>
      <div className={styles.content_wrapper}>
        <div className={styles.img_wrapper}>
          <img className={styles.img} src={item?.mainPic} alt={item?.title} />
        </div>
        <div className={styles.info_wrapper}>
          <div className={styles.row}>
            <p>{item?.description}</p>
          </div>
          <div className={`${styles.row} ${styles.other_info}`}>
            <p>Rating: {item?.rating}</p>
            <p>Stock: {item?.stock}</p>
            <p>Price: {item?.price}</p>
            <SharedQuantityGroup setValue={setQuantity} value={quantity} />
          </div>
          <div className={`${styles.row} ${styles.actions}`}>
            <SharedButton
              buttonStyle={"danger"}
              tip={"Delete"}
              clickHandler={deleteShoppingCart}
            >
              <FaTrashAlt />
            </SharedButton>
            <SharedButton
              buttonStyle={"warning"}
              tip={"Update"}
              clickHandler={updateShoppingCart}
            >
              <FaUndo />
            </SharedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
