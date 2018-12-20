import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class AnimalCard extends Component {
  render() {
    let animal = this.props.animal
    console.log(animal)
    return (
      <Card color="green" className="animalCard">
        <Card.Content>
          <Card.Header>Doggie's Name</Card.Header>
          <Card.Meta>DOB</Card.Meta>
          <Card.Description>Breed, Age, ???</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export { AnimalCard };
