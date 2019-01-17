import React, { Component } from "react";
import ImageScroll from "./ImageScroll";
import AnimalProfile from "./AnimalProfile";

class AnimalProfileView extends Component {
  render() {
    const animalId = this.props.match.params.id 
    return (
      <div>
        <ImageScroll animalId={animalId}/>
        <AnimalProfile animalId = {animalId}/>
      </div>
    );
  }
}

export { AnimalProfileView };
