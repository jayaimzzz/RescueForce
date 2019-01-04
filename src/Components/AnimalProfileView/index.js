import React, { Component } from "react";
import ImageScroll from "./ImageScroll";
import AnimalProfile from "./AnimalProfile";

class AnimalProfileView extends Component {
  render() {
    const animalId = this.props.match.params.id 
    return (
      <div style={{ height: 350, backgroundColor: "yellow", margin: 10 }}>
        Animal Profile View
        <ImageScroll animalId={animalId}/>
        <AnimalProfile animalId = {animalId}/>
      </div>
    );
  }
}

export { AnimalProfileView };
