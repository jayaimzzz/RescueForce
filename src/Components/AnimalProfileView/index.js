import React, { Component, Fragment } from "react";
import ImageScroll from "./ImageScroll";
import AnimalProfile from "./AnimalProfile";

class AnimalProfileView extends Component {
  render() {
    const animalId = this.props.match.params.id 
    return (
      <Fragment>
        <ImageScroll animalId={animalId}/>
        <AnimalProfile animalId = {animalId}/>
      </Fragment>
    );
  }
}

export { AnimalProfileView };
