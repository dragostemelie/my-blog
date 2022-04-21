import React from "react";
import Link from "next/link";

import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className={styles.container}>
        <div className={styles.dark}>t.</div>
        <div className={styles.light}>D.</div>
      </a>
    </Link>
  );
};
