//components
import DetailsCard from "./details-card/DetailsCard";

//styles
import styles from "./Details.module.scss";

const Details = () => {
  return (
    <div className={styles.container}>
      <DetailsCard />
    </div>
  );
};

export default Details;
