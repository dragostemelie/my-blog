import React from "react";
import Link from "next/link";

import styles from "./article.module.scss";

interface IProps {
  description: string;
  image: string;
  link: string;
  subtitle: string;
  title: string;
}

export const Article = ({
  description,
  image,
  link,
  subtitle,
  title,
}: IProps) => {
  return (
    <article className={styles.article}>
      <div>
        <Link href={link} passHref>
          <a>
            <img className={styles.image} src={image} alt={title} />
          </a>
        </Link>
      </div>
      <div className={styles.description}>
        <Link href={link} passHref>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
        <span>{subtitle}</span>
        <p>{description}</p>
      </div>
    </article>
  );
};
