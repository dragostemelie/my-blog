import React from "react";
import Link from "next/link";

import styles from "./navigation.module.scss";
import { NAV_ITEMS } from "consts";
import { useNavigation } from "./navigation.logic";

export const Navigation = () => {
  const { currentPath, menuVisible, toggleMenu } = useNavigation();

  return (
    <div className={styles.container}>
      <nav className={menuVisible ? "open" : undefined}>
        {NAV_ITEMS.map((navItem) => (
          <Link key={navItem.path} href={navItem.path} passHref>
            <a className={navItem.path === currentPath ? "active" : undefined}>
              {navItem.title}
            </a>
          </Link>
        ))}
      </nav>
      <div className="bars-wrapper" onClick={toggleMenu}>
        <div className={menuVisible ? "bars open" : "bars"} />
      </div>
    </div>
  );
};
