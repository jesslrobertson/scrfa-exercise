import React from "react";
import styles from "./NavMenu.module.css";
import menuContent from "../assets/data";

export default function NavMenu() {
  const sideBarLinks = [
    "Home",
    "News & Events",
    "About Us",
    "Contact Us",
    "Boards & Committees",
  ];

  return (
    <div className={styles.menuBox}>
      <div className={styles.menuSubBox}>
        <div className={styles.leftSideBar}>
          {sideBarLinks.map((item, index) => {
            return index !== sideBarLinks.length - 1 ? (
              <div key={index}>
                <a href=" " className={`h4 ${styles.sidebarLink}`}>
                  {item}
                </a>
                <div className={styles.divider} />{" "}
              </div>
            ) : (
              <a href=" " className={`h4 ${styles.sidebarLink}`} key={index}>
                {item}
              </a>
            );
          })}
        </div>
        <div className={styles.mainMenu}>
          {menuContent.map((section, index) => {
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
          })}
        </div>
      </div>
      <div className={styles.accentBar} />
    </div>
  );
}
