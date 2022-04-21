import React from "react";

import styles from "./about.module.scss";

export const About = () => {
  return (
    <article className={styles.about}>
      <div>
        <img className={styles.image} src="/dragos.jpg" alt="Dragos Temelie" />
      </div>
      <div className={styles.description}>
        <h2>Dragos Temelie</h2>

        <span>Frontend Developer</span>
        <p>
          A while ago, Dragos had the pleasure to explore the world of frontend
          development by finishing an online course. He was no stranger to
          programming before, but JavaScript was the one to become his favorite.
          After finishing the course he started working as a frontend developer
          being involved in several projects so far.
        </p>
        <p>
          In his free time, Dragos likes to play video games, occasionally rides
          his bike, and sometimes helps his friends set up a new computer.
        </p>
      </div>
    </article>
  );
};
