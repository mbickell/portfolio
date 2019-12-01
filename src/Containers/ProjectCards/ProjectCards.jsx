import React, { Component } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import inCollaboration from "../../static/images/inCollaboration.png";
import mineSweeper from "../../static/images/mineSweeper.png";
import styles from "./ProjectCards.module.scss";

class ProjectCards extends Component {
  state = {};
  render() {
    return (
      <section className={styles.container}>
        <ProjectCard
          title="In Collaboration"
          link="https://incollaboration.nology.io/login"
          imageLink={inCollaboration}
          description="THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED"
        />
        <ProjectCard
          title="Minesweeper Generator"
          link="http://minesweeper.matthewbickell.co.uk/"
          imageLink={mineSweeper}
          description="THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED THIS IS AN EXAMPLE THAT NEEDS TO BE CHANGED "
        />
      </section>
    );
  }
}

export default ProjectCards;
