import React from "react";
import "../styles/ImageDisplayer.css";
import stockIcon from "../styles/photos/stockIcon.gif";
import { Card } from "semantic-ui-react";

class AnimalCard extends React.Component {
  render() {
    return (
      <Card color="green" className="animalCard">
        <ImageDisplayer />
        <Card.Header>Doggie's Name</Card.Header>
        <Card.Meta>DOB</Card.Meta>
        <Card.Description>Breed, Age, ???</Card.Description>
        <Card.Footer>Host</Card.Footer>
      </Card>
    );
  }
}

export default AnimalCard;
