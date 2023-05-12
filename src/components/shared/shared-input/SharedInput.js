//styles
import styles from "./SharedInput.module.scss";

const SharedInput = ({
  children,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  type,
  value,
}) => {
  const inputErrorClass = error ? styles.error : null;

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={id}>{children}</label>
      <input
        className={`${inputErrorClass}`}
        id={id}
        value={value}
        type={type}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
      {error && <p>{message}</p>}
    </div>
  );
};

export default SharedInput;
