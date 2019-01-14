import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import moment from "moment";

class AnimalCard extends Component {
  render() {
    const animal = this.props.animal;
    console.log(animal.dob);
    console.log(typeof animal.dob);
    const mom = moment(animal.dob);
    console.log(mom);
    console.log(typeof mom);
    const hasPhoto =
      typeof animal.photos !== "undefined" ? animal.photos.length > 0 : false;
    const animalProfilePhoto = hasPhoto
      ? animal.photos[0]
      : "http://bifstl.org/wp-content/uploads/2016/09/blank-profile-picture-coming-soon-300x300.png";
    return (
      <Card
        color="green"
        className="animalCard"
        as={Link}
        to={"/animal/" + animal._id}
      >
        <Card.Content>
          <Image floated="left" size="mini" src={animalProfilePhoto} />
          <Card.Header>{animal.name}</Card.Header>
          <Card.Meta>DOB: {animal.dob}</Card.Meta>
          <Card.Description>Breed, Age, ???</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export { AnimalCard };
