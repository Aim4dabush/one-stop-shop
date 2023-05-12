//styles
import styles from "./SharedLink.module.scss";

const SharedLink = ({ alternateColor, children, path }) => {
  return (
    <a
      className={`${styles.link} ${alternateColor && styles.alternate_color}`}
      href={path}
    >
      {children}
    </a>
  );
};

export default SharedLink;
