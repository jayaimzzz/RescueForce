import React, { Component } from "react";
import ModalAddAnimal from "./ModalAddAnimal";

class ShelterAdminPortal extends Component {
  render() {
    const animal = this.props.animal;
    // const shelter = this.props.shelter;
    // const host = this.props.host;
    return (
      <div style={{marginTop: 70}}>
      <br />
        Add a new animal here!
        <br />
        <ModalAddAnimal  />
      </div>
    );
  }
}

export { ShelterAdminPortal };
