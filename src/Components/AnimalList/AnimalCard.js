import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Label } from "semantic-ui-react";
import moment from "moment";
import { ADOPTABLE, FOSTER_ONLY, NEED_FOSTER } from '../../Constants/index'
import { colors } from "../../Constants/"

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
          // style={{ margin: "5px", padding: "5px", backgroundColor: "#B0D6D0" }}
          style={{ margin: "5px", padding: "5px", backgroundColor: colors.c }}
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

          {animal.status === ADOPTABLE &&
          <Label as="div" color="green" ribbon>
            Adoptable{" "}
          </Label>}
          {animal.status === FOSTER_ONLY &&
          <Label as="div" color="blue" ribbon>
            Foster-only
          </Label>}
          {animal.status ===  NEED_FOSTER &&
          <Label as="div" color="yellow" ribbon>
            Foster ready
          </Label>}

          <Card.Header style={{ padding: "5px" }}>{animal.name}</Card.Header>
          <Card.Meta style={{ color: "black" }}>
            {animal.name} was born almost {moment(animal.dob).fromNow()} on{" "}
            {moment(animal.dob).format("l")}.{" "}
          </Card.Meta>
          <Card.Description style={{ color: "black" }}>
            {animal.name} is a {animal.sex}{" "}
            {animal.sex === "female" ? (
              <Icon name="female" style={{ backgroundColor: "pink" }} />
            ) : (
              <Icon name="male" style={{ backgroundColor: "#328CE5" }} />
            )}
            {animal.sex === 'female' && ` and ${animal.pregnant ? "is" : "is not"} pregnant`}{". "}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export { AnimalCard };

