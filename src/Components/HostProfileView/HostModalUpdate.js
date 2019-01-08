import React from "react";
import { Form, Button, Modal, Icon, Header, Segment, Radio } from "semantic-ui-react";

const options = [
  { key: "1", text: "dog", value: "dog" },
  { key: "2", text: "cat", value: "cat" }
];

const adoptionOptions = [
  { key: "3", text: "Foster Only", value: "foster only" },
  { key: "4", text: "Adoptable", value: "adoptable:" }
];

export default class ModalUpdate extends React.Component {
  state = {
    sexValue: "",
    open: false,
    specialNeeds: "" ,
    specialDiet: "",
    pregnantValue: "",
    fixed: "",
    animalFriendly: "",
    peopleFriendly: ""
  };

  // handleChange = (event, {value}) => {
  //   this.setState({
  //     [event.target.name]: value
  //   });
  // };

  handleToggle = name => (event, {value}) => {
    this.setState({
      [name]: value
    })
  }

  handleOpen =  event => {
      this.setState({
          open: true
      })
  }

  handleClose = event => {
      this.setState({
          open: false,
      })
  }

  render() {
    return (
      <Modal
        trigger={
          <Button className="submit-button" onClick={this.handleOpen}>
            <Icon color="teal" size = "large" name="paw" />
            Update Your Animal
          </Button>
        }
        open={this.state.open}
        onClose={this.handleClose}
        size="tiny"
      >
        <Header
          textAlign="center"
          verticalAlign="middle"
          as="h1"
        >
          Update Your Animal
        </Header>

        <Form size="large">
          <Segment color="grey">
            <Form.Group widths="equal">
              <Form.Input fluid label="Name" placeholder="First Name" />
              <Form.Input
                fluid
                label="Date of Birth"
                placeholder="Date of Birth"
              />
              <Form.Input fluid label="Breed" placeholder="Breed" />
              <Form.Select
                fluid
                label="Species"
                options={options}
                placeholder="Species"
              />
            </Form.Group>

            <Form.Group inline>

              <label>Sex</label>
            <Form.Field>

              <Radio
                label="Female"
                value="female"
                name="sexValue"
                checked={this.state.sexValue === "female"}
                onChange={this.handleToggle('sexValue')}
              />
            </Form.Field>
              <Form.Field>  
              <Radio
                label="Male"
                value="male"
                name="sexValue"
                checked={this.state.sexValue === "male"}
                onChange={this.handleToggle('sexValue')}
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
                onChange={this.handleToggle('specialNeeds')}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Does the animal have a special diet?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.specialDiet === "yes"}
                onChange={this.handleToggle('specialDiet')}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.specialDiet === "no"}
                onChange={this.handleToggle("specialDiet")}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input fluid label="Diet Notes" placeholder="Diet Notes" />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal pregnant?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.pregnantValue === "yes"}
                onChange={this.handleToggle('pregnantValue')}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.pregnantValue === "no"}
                onChange={this.handleToggle('pregnantValue')}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal fixed?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.fixed === "yes"}
                onChange={this.handleToggle('fixed')}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.fixed === "no"}
                onChange={this.handleToggle('fixed')}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal animal-friendly?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.animalFriendly === "yes"}
                onChange={this.handleToggle('animalFriendly')}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.animalFriendly === "no"}
                onChange={this.handleToggle('animalFriendly')}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal people-friendly?</label>
              <Form.Radio
                label="yes"
                value="yes"
                checked={this.state.peopleFriendly === "yes"}
                onChange={this.handleToggle('peopleFriendly')}
              />
              <Form.Radio
                label="no"
                value="no"
                checked={this.state.peopleFriendly === "no"}
                onChange={this.handleToggle('peopleFriendly')}
              />
            </Form.Group>

            <Form.TextArea
              // onChange={this.handleChangeComposeEntry}
              name="theDeets"
              label="Details"
              placeholder="About me!"
              autoHeight
              rows={5}
              onChange={this.handleChange}
            //   how to i change state for this property?  this.state.about??
            />

            <Form.Group widths="equal">
              {/* this should be greyedout unless the user is a shelter.  only shelters will be able to change these four. */}
              <Form.Input fluid label="Shelter Id" placeholder="Shelter Id" />
              <Form.Input fluid label="Host Id" placeholder="Host Id" />
              <Form.Input
                fluid
                label="Status"
                options={adoptionOptions}
                placeholder="Status"
              />
              <Form.Input fluid label="Id" placeholder="Animal Id" />
            </Form.Group>

            
          </Segment>
        </Form>

        <Modal.Actions>
          <Button.Group fluid>
            <Button className="submit-button" onClick={this.handleSubmit}>
              <Icon name="sticky note outline" /> Update
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
