import React, { useState } from "react";
import styles from "./MenuIcon.module.css";

export default function MenuIcon(props) {
  const { menuToggle, setMenuToggle } = props;

  function toggle() {
    setMenuToggle((prev) => !prev);
  }

  const menuButton = (
    <div className={styles.box} onClick={toggle}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <h5 className={styles.title}>MENU</h5>
    </div>
  );

  const closeButton = (
    <div className={styles.box} onClick={toggle}>
      <div className={styles.xBox}>
        <div className={styles.xOne} />
        <div className={styles.xTwo} />
      </div>
      <h5 className={styles.title}>CLOSE</h5>
    </div>
  );

  return (
    <>
    {!menuToggle ? menuButton : closeButton}
    </>
  );
}
