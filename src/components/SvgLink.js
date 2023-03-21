import React from "react";
import styles from "./SvgLink.module.css";

export default function SvgLink(props) {
  const { img, altProp, title } = props;
  return (
    <a href=" " className={styles.square}>
      <img src={img} alt={altProp} className={styles.svgImg} />
      <div className={`${styles.linkTitle} h1`}>{title}</div>
    </a>
  );
}
