//styles
import styles from "./SharedLink.module.scss";

const SharedLink = ({ children, path }) => {
  return (
    <a className={styles.link} href={path}>
      {children}
    </a>
  );
};

export default SharedLink;
