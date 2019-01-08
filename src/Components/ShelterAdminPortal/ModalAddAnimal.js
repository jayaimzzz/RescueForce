import React from "react";
import {
  Form,
  Button,
  Modal,
  Icon,
  Header,
  Segment,
  Radio
} from "semantic-ui-react";
import { addAnimal, updateAnimal, getAnimals } from "../../ActionCreators/animalListActionCreators";
import { connect } from "react-redux";

const options = [
  { key: "1", text: "dog", value: "dog" },
  { key: "2", text: "cat", value: "cat" }
];

const adoptionOptions = [
  { key: "3", text: "Foster Only", value: "foster only" },
  { key: "4", text: "Adoptable", value: "adoptable:" }
];

class ModalAddAnimal extends React.Component {
  state = {
    
  };
 
  handleToggle = name => (event, { value }) => {
    this.setState({
      [name]: value
    });
  };

  handleOpen = event => {
    this.setState({
      open: true
    });
  };

  handleClose = event => {
    this.setState({
      open: false
    });
  };

  handleChangeAddName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangeAddDOB = event => {
    this.setState({
      dob: event.target.value
    });
  };

  handleChangeAddBreed = event => {
    this.setState({
      breed: event.target.value
    });
  };

  handleChangeAddHostId = event => {
    this.setState({
      hostId: event.target.value
    });
  };

  handleChangeAddShelterId = event => {
    this.setState({
      shelterId: event.target.value
    });
  };

  handleChangeAddAnimalId = event => {
    this.setState({
      id: event.target.value
    });
  };

  handleChangeAddDietNotes = event => {
    this.setState({
      dietNotes: event.target.value
    });
  };

  handleChangeAddAboutMe = event => {
    this.setState({
      specialNeeds: event.target.value
    });
  };

  handleSubmit = event => {
    this.props.addAnimal(this.state)
    .then(() => this.props.getAnimals())
    // do i need the line above since i'm just adding animals-not pulling any?
    .then(() => this.handleClose());
  };

  render() {
    return (
      <Modal
        trigger={
          <Button className="submit-button" onClick={this.handleOpen}>
            <Icon color="red" size="large" name="paw" />
            Add a new animal
          </Button>
        }
        open={this.state.open}
        onClose={this.handleClose}
        size="tiny"
      >
        <Header textAlign="center" verticalalign="middle" as="h1">
          Add an animal!
        </Header>

        <Form size="large">
          <Segment color="grey">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Name"
                onChange={this.handleChangeAddName}
                placeholder="First Name"
              />

              <Form.Input
                type="date"
                fluid
                label="Date of Birth"
                onChange={this.handleChangeAddDOB}
                placeholder="Date of Birth"
              />
              <Form.Input
                fluid
                label="Breed"
                onChange={this.handleChangeAddBreed}
                placeholder="Breed"
              />

              <Form.Select
                fluid
                label="Species"
                options={options}
                onChange={this.handleToggle("species")}
                placeholder="Species"
              />
            </Form.Group>

            <Form.Group inline>
              <Form.Field>
                <label>Sex</label>
                <Radio
                  label="Female"
                  value="female"
                  name="sexValue"
                  checked={this.state.sexValue === "female"}
                  onChange={this.handleToggle("sexValue")}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Male"
                  value="male"
                  name="sexValue"
                  checked={this.state.sexValue === "male"}
                  onChange={this.handleToggle("sexValue")}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group inline>
              <label>Does the animal have special needs?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.specialNeeds === "yes"}
                onChange={this.handleToggle("specialNeeds")}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.specialNeeds === "no"}
                onChange={this.handleToggle("specialNeeds")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Does the animal have a special diet?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.specialDiet === "yes"}
                onChange={this.handleToggle("specialDiet")}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.specialDiet === "no"}
                onChange={this.handleToggle("specialDiet")}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Diet Notes"
                placeholder="Diet Notes"
                onChange={this.handleChangeAddDietNotes}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal pregnant?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.pregnantValue === "yes"}
                onChange={this.handleToggle("pregnantValue")}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.pregnantValue === "no"}
                onChange={this.handleToggle("pregnantValue")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal fixed?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.fixed === "yes"}
                onChange={this.handleToggle("fixed")}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.fixed === "no"}
                onChange={this.handleToggle("fixed")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal animal-friendly?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.animalFriendly === "yes"}
                onChange={this.handleToggle("animalFriendly")}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.animalFriendly === "no"}
                onChange={this.handleToggle("animalFriendly")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal people-friendly?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.peopleFriendly === "yes"}
                onChange={this.handleToggle("peopleFriendly")}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.peopleFriendly === "no"}
                onChange={this.handleToggle("peopleFriendly")}
              />
            </Form.Group>

            <Form.TextArea
              name="theDeets"
              label="Details"
              placeholder="About me!"
              autoHeight
              rows={5}
              onChange={this.handleChangeAddAboutMe}
            />

            {this.props.role === "shelter" && 
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Shelter Id"
                  onChange={this.handleChangeAddShelterId}
                  placeholder="Shelter Id"
                />

                <Form.Input
                  fluid
                  label="Host Id"
                  onChange={this.handleChangeAddHostId}
                  placeholder="Host Id"
                />

                <Form.Select
                  fluid
                  label="Status"
                  options={adoptionOptions}
                  onChange={this.handleToggle("status")}
                  placeholder="Status"
                />
                <Form.Input
                  fluid
                  label="Id"
                  onChange={this.handleChangeAddAnimalId}
                  placeholder="Animal Id"
                />
              </Form.Group>
            }
          </Segment>
        </Form>

        <Modal.Actions>
          <Button.Group fluid>
            <Button className="submit-button" onClick={this.handleSubmit}>
              <Icon name="sticky note outline" /> Add
            </Button>
            <Button.Or />
            <Button
              color="red"
              className="cancel-button"
              onClick={this.handleClose}
            >
              <Icon name="remove" /> Cancel
            </Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state =>{
  return {role: state.auth.user.type}
};

const mapDispatchToProps = { addAnimal, getAnimals };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddAnimal);


