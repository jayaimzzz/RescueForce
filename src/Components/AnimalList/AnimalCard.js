import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class AnimalCard extends Component {
  render() {
    let animal = this.props.animal
    console.log(animal)
    return (
      <Card color="green" className="animalCard" style={{width: "200px"}}>
        <Card.Content>
          <Card.Header>Name</Card.Header>
          <Card.Meta>Gender</Card.Meta>
          <Card.Meta>Age</Card.Meta>
          <Card.Description>Eats, sleeps, shits and gives kisses.</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export { AnimalCard };
