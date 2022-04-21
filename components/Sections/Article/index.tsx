import React from "react";
import MarkdownIt from "markdown-it";

import styles from "./article.module.scss";
import { ArticleType } from "types";

export const Article = (article: ArticleType) => {
  const md = new MarkdownIt();
  const content = md.render(article.content);
  return (
    <section className={styles.article}>
      <h2>{article.title}</h2>
      <span>{article.category}</span>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </section>
  );
};
