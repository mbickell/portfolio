import React from "react";
import ProjectCard from "./ProjectCard";
import projectCardData from "../../Containers/ProjectCards/ProjectCardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { shallow } from "enzyme";

describe("<ProjectCard />", () => {
  let projectCard;
  beforeEach(() => {
    projectCard = shallow(
      <ProjectCard
        title={projectCardData[0].title}
        githubLink={"https://github.com/nology-tech/in-collaboration"}
        link={projectCardData[0].link}
        imageLink={projectCardData[0].imageLink}
        description={projectCardData[0].description}
        techStack={projectCardData[0].techStack}
        key={projectCardData[0].title}
      />
    );
  });
  test("Component renders <FontAwesomeIcon />", () => {
    expect(projectCard.find(FontAwesomeIcon).length).toBe(1);
  });
  test("Renders h2", () => {
    expect(projectCard.find("h2").length).toBe(1);
  });
  test("Renders links", () => {
    expect(projectCard.find("a").length).toBe(2);
  });
  test("Renders img", () => {
    expect(projectCard.find("img").length).toBe(1);
  });
  test("Renders p's", () => {
    expect(projectCard.find("p").length).toBe(2);
  });
});
