import React from "react";

import styles from "./about.module.scss";

export const About = () => {
  return (
    <article className={styles.about}>
      <div>
        {/* eslint-disable-next-line */}
        <img className={styles.image} src="/dragos.jpg" alt="Dragos Temelie" />
      </div>
      <div className={styles.description}>
        <h2>Dragos Temelie</h2>
        <span>Frontend Developer</span>
        <p>
          A while ago, I had the pleasure to explore the world of frontend
          development by finishing an online course. I was no stranger to
          programming before, but JavaScript was the one to become my favorite.
          After finishing the course I started working as a frontend developer
          being involved in several projects so far.
        </p>
        <p>
          In my free time, I like to play video games, occasionally rides my
          bike, and sometimes helps my friends set up a new computer.
        </p>
      </div>
    </article>
  );
};
