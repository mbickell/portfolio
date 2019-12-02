import React, { Component } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectCardData from "./ProjectCardData";
import styles from "./ProjectCards.module.scss";

class ProjectCards extends Component {
  state = {};
  render() {
    return (
      <section className={styles.container}>
        {projectCardData.map(data => (
          <ProjectCard
            title={data.title}
            githubLink={data.githubLink}
            link={data.link}
            imageLink={data.imageLink}
            description={data.description}
            techStack={data.techStack}
            key={data.title}
          />
        ))}
      </section>
    );
  }
}

export default ProjectCards;
