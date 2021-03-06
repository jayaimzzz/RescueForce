import React, { Component } from "react";
import { Form, Button, Modal, Icon, Header, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateShelter } from "../../ActionCreators";

class ModalUpdateShelter extends Component {
  state = {
    open: false,
    shelter: this.props.shelter
  };

  handleChange = (event, { name, value }) => {
    this.setState({
      shelter: { ...this.state.shelter, [name]: value }
    });
  };

  handleCapacityChange = (event, { name, value }) => {
    this.setState({
      shelter: {
        ...this.state.shelter,
        capacity: {
          ...this.state.shelter.capacity,
          [name]: Number(value)
        }
      }
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
      shelter: this.props.shelter
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleSubmit = () => {
    const { name, address, email, phoneNumber, capacity, _id} = this.state.shelter;
    const shelter = { name, address, email, phoneNumber, capacity, _id};
    this.props.updateShelter(shelter);
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.handleOpen}>
            <Icon color="red" size="large" name="edit" />
            Edit Profile
          </Button>
        }
        open={this.state.open}
        onClose={this.handleClose}
      >
        <Header textAlign="center" verticalalign="middle" as="h1">
          Update Your Profile
        </Header>
        <Form size="large">
          <Segment color="grey">
            <Form.Input
              fluid
              label="Name"
              name="name"
              value={this.state.shelter.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <Form.Input
              fluid
              label="Address"
              name="address"
              value={this.state.shelter.address}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Email"
              name="email"
              value={this.state.shelter.email}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Phone Number"
              name="phoneNumber"
              value={this.state.shelter.phoneNumber}
              onChange={this.handleChange}
            />
            <Form.Group widths="equal">
              <Form.Input
                type="number"
                name="dogs"
                label="Dogs"
                value={this.state.shelter.capacity.dogs}
                onChange={this.handleCapacityChange}
              />
              <Form.Input
                type="number"
                label="Cats"
                name="cats"
                value={this.state.shelter.capacity.cats}
                onChange={this.handleCapacityChange}
              />
            </Form.Group>
          </Segment>
        </Form>
        <Modal.Actions>
          <Button.Group fluid>
            <Button className="submit-button" disabled={this.props.inProgress} onClick={this.handleSubmit}>
              <Icon name="sticky note outline" /> Save Changes
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

const mapStateToProps = state => ({
  shelter: state.shelters.find(shelter => shelter._id === state.auth.user.data._id),
  inProgress: state.inProgress.shelterProfileUpdate
});

const mapDispatchToProps = dispatch => ({
  updateShelter: shelterInfo => dispatch(updateShelter(shelterInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalUpdateShelter);
