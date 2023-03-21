import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import styles from "./Nav.module.css";
import NavMenu from "./NavMenu";
import PopDownSearch from "./PopDownSearch";

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className={styles.navBox}>
      <div className={styles.navContent}>
        <div className={styles.left}>
          <MenuIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
          <img
            className={styles.logo}
            src={require("../assets/rfa_logo.png")}
            alt="South Carolina"
          />
          <div className={styles.titleBox}>
            <div className={`${styles.headerFour} header-4`}>
              South Carolina
            </div>
            <div className={`${styles.headerFour} header-4`}>
              Revenue and Fiscal Affairs Office
            </div>
            <p className={styles.subtitle}>
              Transforming data into solutions for South Carolina
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <a className={`${styles.navLink} h5`} href=" ">
            About Us
          </a>
          <a className={`${styles.navLink} h5`} href=" ">
            {" "}
            Events
          </a>
          <a className={`${styles.navLink} h5`} href=" ">
            Boards & Committees
          </a>
          <PopDownSearch />
        </div>
      </div>
      <div className={styles.accentBar} />
      {menuToggle && <NavMenu />}
    </div>
  );
}
