import React, { Component } from "react";
import styles from "./ProjectCard.module.scss";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <section className={styles.card}>
        <h2>{this.props.title}</h2>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img src={this.props.imageLink} alt={this.props.title} />
        </a>
        <p>{this.props.description}</p>
      </section>
    );
  }
}

export default ProjectCard;
