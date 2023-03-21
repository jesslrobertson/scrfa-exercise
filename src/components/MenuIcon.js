import React from "react";
import styles from "./MenuIcon.module.css";

export default function MenuIcon(props) {
  const { menuToggle, setMenuToggle } = props;

  const toggle = () => setMenuToggle((prev) => !prev);

  const menuButton = (
    <>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
      <h5 className={styles.title}>MENU</h5>
    </>
  );

  const closeButton = (
    <>
      <div className={styles.xBox}>
        <div className={styles.xOne} />
        <div className={styles.xTwo} />
      </div>
      <h5 className={styles.title}>CLOSE</h5>
    </>
  );

  return (
    <button className={styles.box} onClick={toggle}>
      {!menuToggle ? menuButton : closeButton}
    </button>
  );
}
