import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Image, Button, Card, Icon, CardContent } from "semantic-ui-react";
import { HOST, SHELTER, NEED_FOSTER } from "../../Constants";
import ModalUpdate from "./ModalUpdate";
import { updateAnimal } from "../../ActionCreators";
import moment from "moment";

class AnimalProfile extends Component {
  handleClaimFosterClick = data => () => {
    this.props
      .updateAnimal(data)
      .then(() =>
        this.props.navToAnimalProfile("/host/" + this.props.loggedInUserId)
      );
  };

  render() {
    const animal = this.props.animal;
    const data = {
      id: this.props.animal._id,
      hostId: this.props.loggedInUserId,
      status: "foster-only"
    };

    return (
      <Card>
        <Card.Content>
          <Card.Header>{animal.name}</Card.Header>
          <Card.Description>Species: {animal.species}</Card.Description>
          <Card.Description>Breed: {animal.breed}</Card.Description>
          <Card.Description>
            DOB: {moment(animal.dob).format("MM/DD/YYYY")}
          </Card.Description>
          <Card.Description>Sex: {animal.sex}</Card.Description>
          <Card.Description>About: {animal.about}</Card.Description>
          {this.props.displayHostName ? (
            <Card.Description>
              Host: {(animal.hostId && animal.hostId.name) || "N/A"}
            </Card.Description>
          ) : null}
          <Card.Description>Status: {animal.status}</Card.Description>
          <Card.Description>
            {animal.name} {animal.animalFriendly ? "is" : "is not"}{" "}
            animal-friendly.{" "}
          </Card.Description>
          <Card.Description>
            {animal.name} {animal.peopleFriendly ? "is" : "is not"}{" "}
            people-friendly.{" "}
          </Card.Description>
          <Card.Description>
            {animal.name} {animal.pregnant ? "is" : "is not"} pregnant.{" "}
          </Card.Description>
          <Card.Description>
            {animal.name} {animal.fixed ? "is" : "is not"} fixed.{" "}
          </Card.Description>
          <Card.Description>
            {animal.name} {animal.specialDiet ? "does" : "does not"} have a
            special diet.{" "}
          </Card.Description>
          <Card.Description>
            {animal.name} {animal.specialNeeds ? "does" : "does not"} have
            special needs.{" "}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {this.props.canUpdate && <ModalUpdate animal={animal} />}
          {this.props.canClaim && (
            <Button onClick={this.handleClaimFosterClick(data)} color="red">
              Foster {this.props.animal.name}
            </Button>
          )}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  const animal = state.animals.find(animal => animal._id === props.animalId);
  return {
    animal,
    canUpdate:
      state.auth.user.type === SHELTER ||
      state.auth.user.data._id === (animal.hostId && animal.hostId._id),
    canClaim: state.auth.user.type === HOST && animal.status === NEED_FOSTER,
    loggedInUserId: state.auth.user.data._id,
    displayHostName: state.auth.user.type === SHELTER
  };
};

const mapDispatchToProps = dispatch => ({
  updateAnimal: data => dispatch(updateAnimal(data)),
  navToAnimalProfile: destination => dispatch(push(destination))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalProfile);
