import { useRef } from "react";

//styles
import styles from "./SharedQuantityGroup.module.scss";

const SharedQuantityGroup = ({ setValue, value }) => {
  const inputRef = useRef();

  const decrementHandler = () => {
    if (inputRef.current.value > 1) {
      inputRef.current.value--;
      setValue(inputRef.current.value);
    }
  };

  const incrementHandler = () => {
    inputRef.current.value++;
    setValue(inputRef.current.value);
  };

  return (
    <div className={styles.btnInputGroup}>
      <button
        className={`${styles.btn} ${styles.left}`}
        onClick={decrementHandler}
      >
        -
      </button>
      <input
        className={styles.input}
        type="number"
        ref={inputRef}
        defaultValue={value}
      />
      <button
        className={`${styles.btn} ${styles.right}`}
        onClick={incrementHandler}
      >
        +
      </button>
    </div>
  );
};

export default SharedQuantityGroup;
