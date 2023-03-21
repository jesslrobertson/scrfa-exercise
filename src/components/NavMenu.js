import React from "react";
import styles from "./NavMenu.module.css";
import menuContent from "../assets/data";

export default function NavMenu() {
  const mappedMenuContent = menuContent.map((section, index) => {
    return (
      <div className={`styles.${section.className}`} key={index}>
        <div className={`header-bar-box`}>
          <div className={`header-3 ${styles.sectionTitle}`}>
            {section.title}
          </div>
          <div className={`gold-bar-1`}></div>
        </div>
        <div className={styles.linkBox}>
          {section.links.map((linkTitle, linkIndex) => {
            return (
              <a href=" " className={styles.menuLink} key={linkIndex}>
                {linkTitle}
              </a>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.menuBox}>
      <div className={styles.leftSideBar}>
        <a href=" " className={`h4 ${styles.sidebarLink}`}>
          Home
        </a>
        <div className={styles.divider} />
        <a href=" " className={`h4 ${styles.sidebarLink}`}>
          News & Events
        </a>
        <div className={styles.divider} />
        <a href=" " className={`h4 ${styles.sidebarLink}`}>
          About Us
        </a>
        <div className={styles.divider} />
        <a href=" " className={`h4 ${styles.sidebarLink}`}>
          Contact Us
        </a>
        <div className={styles.divider} />
        <a href=" " className={`h4 ${styles.sidebarLink}`}>
          Boards & Committees
        </a>
      </div>
      <div className={styles.mainMenu}>{mappedMenuContent}</div>
    </div>
  );
}
