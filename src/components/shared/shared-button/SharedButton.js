//styles
import styles from "./SharedButton.module.scss";

const SharedButton = ({ buttonStyle, children }) => {
  return (
    <button
      className={`${buttonStyle === "nav-link" && styles.nav_link} ${
        buttonStyle === "non-nav-link" && styles.non_nav_link
      }`}
    >
      {children}
    </button>
  );
};

export default SharedButton;
