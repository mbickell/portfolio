import React, { Component } from "react";
import Info from "../../Components/Info/Info";
import styles from "./ContactInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

class Contactinfo extends Component {
  state = {};
  render() {
    return (
      <section className={styles.contactContainer}>
        <Info
          faIcon={<FontAwesomeIcon icon={faGithub} />}
          link={"https://github.com/mbickell"}
        />
        <Info
          faIcon={<FontAwesomeIcon icon={faLinkedin} />}
          link={"https://www.linkedin.com/in/matthew-bickell-54742b180/"}
        />
        <Info
          faIcon={<FontAwesomeIcon icon={faEnvelopeSquare} />}
          link={"mailto:matthewbickell@hotmail.com"}
        />
      </section>
    );
  }
}

export default Contactinfo;
