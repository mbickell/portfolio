import React, { Component } from "react";
import styles from "./Info.module.scss";

class Info extends Component {
  state = {};
  render() {
    return (
      <>
        <a
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkContainer}
        >
          <span className={styles.link}>{this.props.faIcon}</span>
        </a>
      </>
    );
  }
}

export default Info;
