import React, { Component } from "react";
import TitleCard from "../../Components/TitleCard/TitleCard";
import ContactInfo from "../ContactInfo/ContactInfo";
import ProjectCards from "../ProjectCards/ProjectCards";
import styles from "./App.module.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <TitleCard />
        <ContactInfo />
        <ProjectCards />
      </>
    );
  }
}

export default App;
