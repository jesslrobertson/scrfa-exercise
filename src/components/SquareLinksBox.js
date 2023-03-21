import React from "react";
import styles from "./SquareLinksBox.module.css";
import SvgLink from "./SvgLink";
import menuContent from "../assets/data";

export default function SquareLinksBox() {
  const squareLink = menuContent.map((item, index) => {
    return (
      <SvgLink
        img={item.svgImg}
        title={item.title}
        altProp={item.altProp}
        key={index}
      />
    );
  });

  return <div className={styles.linkBox}>{squareLink}</div>;
}
