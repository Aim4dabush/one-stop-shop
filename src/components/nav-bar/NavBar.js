import { useState } from "react";

//components
import SharedButton from "../shared/shared-button/SharedButton";
import SharedLink from "../shared/shared-link/SharedLink";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const mouseEnterHandler = () => {
    setShowLinks(true);
  };
  const mouseLeaveHandler = () => {
    setShowLinks(false);
  };
  return (
    <nav className={styles.nav_container}>
      <SharedLink>One Stop Shop</SharedLink>
      <ul className={styles.links_list}>
        <li>
          <SharedLink>Cart</SharedLink>
        </li>
        <li>
          <SharedLink>Checkout</SharedLink>
        </li>
        <li
          className={styles.profile}
          onMouseLeave={mouseLeaveHandler}
          style={{ overflow: showLinks ? "visible" : "hidden" }}
        >
          <p className={styles.profile_title} onMouseEnter={mouseEnterHandler}>
            Profile
          </p>
          <ul className={styles.profile_list}>
            <li>
              <SharedLink path={"/profile"}>Dashboard</SharedLink>
            </li>
            <li>
              <SharedLink path={"/profile/orders"}>Order History</SharedLink>
            </li>
            <li>
              <SharedLink path={"/profile/wish-list"}>Wish List</SharedLink>
            </li>
          </ul>
        </li>
        <li>
          <SharedLink>Login</SharedLink>
        </li>
        <li>
          <SharedButton>Sign Out</SharedButton>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
