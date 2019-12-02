import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import styles from "./ProjectCard.module.scss";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <section className={styles.card}>
        <h2>
          {this.props.title}
          <a
            href={this.props.githubLink}
            className={styles.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </h2>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img src={this.props.imageLink} alt={this.props.title} />
        </a>
        <p className={styles.techStack}>{this.props.techStack}</p>
        <p>{this.props.description}</p>
      </section>
    );
  }
}

export default ProjectCard;
