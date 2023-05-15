//styles
import styles from "./SharedButton.module.scss";

const SharedButton = ({ buttonStyle, children, clickHandler }) => {
  return (
    <button
      className={`${
        (buttonStyle === "nav-link" && styles.nav_link) ||
        (buttonStyle === "non-nav-link" && styles.non_nav_link) ||
        (buttonStyle === "nav-button" && styles.nav_button) ||
        (buttonStyle === "success" && styles.success) ||
        (buttonStyle === "secondary" && styles.secondary)
      }`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default SharedButton;
