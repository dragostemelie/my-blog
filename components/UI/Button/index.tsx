import React from "react";

import styles from "./button.module.scss";

interface IButtonProps {
  title: string;
  onClick?: () => void;
}

export const Button = ({ title, onClick }: IButtonProps) => {
  return (
    <div
      className={[styles.container, styles.primary].join(" ")}
      onClick={onClick}
    >
      <span className={styles.text}>{title}</span>
    </div>
  );
};
