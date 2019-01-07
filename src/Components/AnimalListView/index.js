import React, { Component, Fragment } from "react";

import AnimalList from "../AnimalList";
import { AnimalFilter } from "./AnimalFilter";

class AnimalListView extends Component {
  render() {
    const { animalType } = this.props;
    return (
      <Fragment>
        <AnimalFilter />
        <AnimalList filter={{ species: animalType }} />
      </Fragment>
    );
  }
}

export default AnimalListView;
