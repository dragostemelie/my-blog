import React from "react";
import styles from "./spinners.module.scss";

export const RotatingPlane = () => <div className={styles["rotating-plane"]} />;

export const LoadingBlocks = () => (
  <div className={styles["loading-blocks"]}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
