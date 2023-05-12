import { useState } from "react";

//components
import SharedButton from "../shared/shared-button/SharedButton";
import SharedLink from "../shared/shared-link/SharedLink";

//react icons
import {
  FaBars,
  FaRegWindowClose,
  FaShoppingCart,
  FaShoppingBag,
  FaUserCircle,
} from "react-icons/fa";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showOnHover, setShowOnHover] = useState(false);
  const [showOnClick, setShowOnClick] = useState(false);

  const mouseEnterHandler = () => {
    setShowOnHover(true);
  };
  const mouseLeaveHandler = () => {
    setShowOnHover(false);
  };
  const openHandler = () => {
    setOpenMenu(!openMenu);
    setShowOnClick(false);
  };
  const showOnClickHandler = () => {
    setShowOnClick(!showOnClick);
  };
  return (
    <nav className={styles.nav_container}>
      <div className={styles.brand_wrapper}>
        <SharedLink buttonStyle={"nav-link"} path={"/"}>
          One Stop Shop
        </SharedLink>
      </div>
      <ul
        className={`${styles.links_wrapper} ${
          openMenu ? styles.show_nav : styles.hide_nav
        }`}
      >
        <li>
          <SharedLink buttonStyle={"nav-link"} path={"/cart"}>
            <FaShoppingCart /> Cart
          </SharedLink>
        </li>
        <li>
          <SharedLink buttonStyle={"nav-link"} path={"/checkout"}>
            <FaShoppingBag /> Checkout
          </SharedLink>
        </li>
        <li
          className={`${styles.profile} ${
            showOnHover ? styles.visible : styles.hidden
          }`}
          onMouseLeave={mouseLeaveHandler}
        >
          <SharedButton
            buttonStyle={"non-nav-link"}
            clickHandler={showOnClickHandler}
          >
            <FaUserCircle /> Profile
          </SharedButton>
          <ul
            className={`${styles.profile_list} ${
              showOnClick ? styles.show_profile : styles.hide_profile
            }`}
            onMouseEnter={mouseEnterHandler}
          >
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
      <div className={styles.icon_wrapper}>
        {openMenu ? (
          <SharedButton buttonStyle={"nav-button"} clickHandler={openHandler}>
            <FaRegWindowClose />
          </SharedButton>
        ) : (
          <SharedButton buttonStyle={"nav-button"} clickHandler={openHandler}>
            <FaBars />
          </SharedButton>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
