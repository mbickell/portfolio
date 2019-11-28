import React, { Component } from "react";
import TitleCard from "../../Components/TitleCard/TitleCard";
import ContactInfo from "../../Containers/ContactInfo/ContactInfo";
import styles from "./App.module.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <TitleCard />
        <ContactInfo />
      </>
    );
  }
}

export default App;
