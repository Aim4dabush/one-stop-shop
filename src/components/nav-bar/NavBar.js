import { useState } from "react";

//components
import SharedButton from "../shared/shared-button/SharedButton";
import SharedLink from "../shared/shared-link/SharedLink";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  console.log(showLinks);

  const mouseEnterHandler = () => {
    setShowLinks(true);
  };
  const mouseLeaveHandler = () => {
    setShowLinks(false);
  };
  return (
    <nav className={styles.nav_container}>
      <SharedLink buttonStyle={"nav-link"} path={"/"}>
        One Stop Shop
      </SharedLink>
      <ul className={styles.links_list}>
        <li>
          <SharedLink buttonStyle={"nav-link"} path={"/cart"}>
            Cart
          </SharedLink>
        </li>
        <li>
          <SharedLink buttonStyle={"nav-link"} path={"/checkout"}>
            Checkout
          </SharedLink>
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
          <SharedLink path={"/login"}>Login</SharedLink>
        </li>
        <li>
          <SharedButton buttonStyle={"nav-link"}>Sign Out</SharedButton>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
