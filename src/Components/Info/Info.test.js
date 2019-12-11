import React from "react";
import Info from "./Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { shallow } from "enzyme";

describe("<Info />", () => {
  let info;
  beforeEach(() => {
    info = shallow(
      <Info
        faIcon={<FontAwesomeIcon icon={faLinkedin} />}
        link={"https://www.linkedin.com/in/matthew-bickell-54742b180/"}
      />
    );
  });

  test("Component renders a link", () => {
    expect(info.find("a").length).toBe(1);
  });

  test("Renders Font Awesome icon", () => {
    expect(info.find(FontAwesomeIcon).length).toBe(1);
  });
});
