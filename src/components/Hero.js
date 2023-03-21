import React from "react";
import styles from "./Hero.module.css";
import SearchIcon from "../assets/search-icon-active.svg";

export default function Hero() {
  return (
    <div className={styles.heroBox}>
      <div className={`header-4 ${styles.heroText}`}>
        Providing independent research, analysis, and resources to facilitate
        informed policy decisions and administration of services
      </div>
      <div className={styles.searchBox}>
        <input className={styles.searchInput} placeholder="Search rfa.sc.gov" />
        <button className={`${styles.button} solid-button icon-button`}>
          Search
          <span>
            <img
              src={SearchIcon}
              alt="magnifying glass icon"
              className={styles.searchIcon}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
