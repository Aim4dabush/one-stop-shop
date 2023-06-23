//styles
import styles from "./SharedInput.module.scss";

const SharedInput = ({
  children,
  checked,
  disable,
  error,
  full,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  smallDevice,
  split,
  type,
  value,
}) => {
  const checkbox = type === "checkbox" && styles.checkbox;
  const full_width = full && styles.full_width;
  const input_error = error && styles.error;
  const label_error = error && styles.error_label;
  const small_device = smallDevice && styles.small_device;
  const split_width = split && styles.split_width;

  return (
    <div
      className={`${checkbox} ${full_width} ${styles.input_wrapper} ${small_device} ${split_width}`}
    >
      <label htmlFor={id} className={`${label_error}`}>
        {children}
      </label>
      <input
        checked={checked}
        className={`${input_error}`}
        disabled={disable}
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
