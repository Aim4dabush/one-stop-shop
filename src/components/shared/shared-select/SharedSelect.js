//styles
import styles from "./SharedSelect.module.scss";

const SharedSelect = ({
  children,
  disable,
  error,
  id,
  message,
  onBlurHandler,
  onChangeHandler,
  padding,
  selectOptions,
  smallDevice,
  value,
}) => {
  const select_error = error && styles.error;
  const select_padding = padding && styles.padding;
  const small_device = smallDevice && styles.small_device;

  return (
    <div className={`${select_padding} ${styles.select} ${small_device}`}>
      <label htmlFor={id}>{children}</label>
      <select
        className={`${select_error}`}
        disabled={disable}
        id={id}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={value}
      >
        {selectOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {error && <p className={styles.error_message}>{message}</p>}
    </div>
  );
};

export default SharedSelect;
