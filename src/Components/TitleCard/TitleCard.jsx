import React, { Component } from "react";
import styles from "./TitleCard.module.scss";

class TitleCard extends Component {
  state = {};
  render() {
    return (
      <div className={styles.titleCard}>
        <section className={styles.intro}>
          <h1>Matthew Bickell</h1>
          <h3>Junior Software Developer</h3>
          <h3>_nologist</h3>
          <h2>Welcome to my portfolio</h2>
        </section>
      </div>
    );
  }
}

export default TitleCard;
