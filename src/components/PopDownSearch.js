import React, { useState } from "react";
import styles from "./PopDownSearch.module.css";
import SearchIcon from "../assets/search-icon.svg";
import ActiveSearchIcon from "../assets/search-icon-active.svg";

export default function PopDownSearch(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const openIcon = (
    <img
      src={ActiveSearchIcon}
      className={styles.searchIcon}
      alt="Focused magnifying glass icon"
    />
  );
  const closedIcon = (
    <img
      src={SearchIcon}
      className={styles.searchIcon}
      alt="Magnifying glass icon"
    />
  );

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        className={`${styles.searchIconButton} ${
          isOpen ? styles.searchIconButtonOpen : styles.searchIconButtonClosed
        }`}
        onClick={toggle}
      >
        {isOpen ? openIcon : closedIcon}
      </button>
      {isOpen && (
        <div className={styles.activeSearchPopDown}>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter search term"
            name="search"
            value={searchInput}
            className={styles.searchInput}
          />
          <button className={`solid-button ${styles.searchButton}`}>
            SEARCH
          </button>
        </div>
      )}
    </>
  );
}
