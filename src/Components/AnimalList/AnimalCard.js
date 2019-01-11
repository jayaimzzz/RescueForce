import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

class AnimalCard extends Component {
  render() {
    const animal = this.props.animal;
    const hasPhoto =
      typeof animal.photos !== "undefined" ? animal.photos.length > 0 : false;
    const animalProfilePhoto = hasPhoto
      ? animal.photos[0]
      : "http://bifstl.org/wp-content/uploads/2016/09/blank-profile-picture-coming-soon-300x300.png";
    return (
      <Card
        style={{
          width: "330px",
          border: "1.3px solid",
          borderColor: "black"
        }}
        className="ui card"
        as={Link}
        to={"/animal/" + animal._id}
      >
        <Card.Content
          style={{ margin: "5px", padding: "5px", backgroundColor: "#B0D6D0" }}
        >
          <Image
            style={{
              border: "1.5px solid",
              borderColor: "black",
              borderRadius: "7px"
            }}
            floated="left"
            size="small"
            src={animalProfilePhoto}
          />
          <Card.Header style={{ padding: "5px" }}>{animal.name}</Card.Header>
          <Card.Meta>DOB: {animal.dob}</Card.Meta>
          <Card.Description>
            Adorable pet that eats, shits and cuddles.
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export { AnimalCard };
