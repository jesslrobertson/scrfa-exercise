import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import styles from "./Nav.module.css";
import SearchIcon from "../assets/search-icon.svg";
import ActiveSearchIcon from "../assets/search-icon-active.svg";
import NavMenu from './NavMenu'

export default function Nav() {
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [menuToggle, setMenuToggle] = useState(false)

  function toggle() {
    setSearchToggle((prevToggle) => !prevToggle);
  }

  function handleChange(e) {
    setSearchInput((prevSearchInput) => e.target.value);
  }

  const closedSearch = (
    <button
      className={`${styles.searchIconButton} ${styles.searchIconButtonClosed}`}
      onClick={toggle}
    >
      <span>
      <img
        src={SearchIcon}
        className={styles.searchIcon}
        alt="Magnifying glass icon"
      />
      </span>
    </button>
  );

  const openSearch = (
    <div className={`${styles.activeSearchContainer}`}>
      <button
        onClick={toggle}
        className={`${styles.searchIconButtonOpen} ${styles.searchIconButton}`}
        aria-label="Opens a search box"
      >
        <span>
          <img
            src={ActiveSearchIcon}
            className={styles.searchIcon}
            alt={"Focused magnifying glass icon"}
          ></img>
        </span>
      </button>
      <div className={styles.activeSearchPopDown}>
        <input
          onChange={handleChange}
          placeholder="Enter search term"
          name="search"
          value={searchInput}
          className={styles.searchInput}
        />
        <button className={`solid-button ${styles.searchButton}`} tabindex="0" >
          SEARCH
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.navBox}>
      <div className={styles.navContent}>
        <div className={styles.left}>
          <MenuIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
          <img
            className={styles.logo}
            src={require("../assets/rfa_logo.png")}
            alt="South Carolina"
          ></img>
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
          <a className='h5' href=" ">About Us</a>
          <a className='h5' href=" "> Events</a>
          <a className='h5' href=" ">Boards & Committees</a>
          {searchToggle ? openSearch : closedSearch}
        </div>
      </div>
      {menuToggle && <NavMenu/>}
      <div className={styles.accentBar} />
    </div>
  );
}
