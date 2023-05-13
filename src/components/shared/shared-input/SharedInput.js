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
  const input_error = error && styles.error;

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={id} className={`${error && styles.error_label}`}>
        {children}
      </label>
      <input
        className={`${input_error}`}
        id={id}
        value={value}
        type={type}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
      {error && <p className={styles.error_message}>{message}</p>}
    </div>
  );
};

export default SharedInput;
