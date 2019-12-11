import React from "react";
import TitleCard from "./TitleCard";
import { shallow } from "enzyme";

describe("<TitleCard />", () => {
  let titleCard;
  beforeEach(() => {
    titleCard = shallow(<TitleCard />);
  });

  test("Renders headers", () => {
    expect(titleCard.find("h1").length).toBe(1);
    expect(titleCard.find("h2").length).toBe(1);
    expect(titleCard.find("h3").length).toBe(2);
  });
});
