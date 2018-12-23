import React, { Component } from "react";
import ImageScroll from "./ImageScroll";
import { AnimalProfile } from "./AnimalProfile";

class AnimalProfileView extends Component {
  render() {
    return (
      <div style={{ height: 350, backgroundColor: "yellow", margin: 10 }}>
        Animal Profile View
        <ImageScroll animalId="1"/>
        <AnimalProfile />
      </div>
    );
  }
}

export { AnimalProfileView };
