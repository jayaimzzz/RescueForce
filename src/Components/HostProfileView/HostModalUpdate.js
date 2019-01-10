import React from "react";
import {
  Form,
  Button,
  Modal,
  Icon,
  Header,
  Segment
} from "semantic-ui-react";
import {
  updateHost,
  getAllHosts
} from "../../ActionCreators/hostActionCreators";
import { connect } from "react-redux";

class HostModalUpdate extends React.Component {
  state = {
    name: this.props.host.name,
    address: this.props.host.address,
    phoneNumber: this.props.host.phoneNumber,
    // email: this.props.host.email,
    capacity: this.props.capacity,
    id: this.props.host._id
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

  handleChangeUpdateName = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleChangeUpdateAddress = event => {
    this.setState({
      address: event.target.value
    });
  };

  handleChangeUpdatePhoneNumber = event => {
    this.setState({
      phoneNumber: event.target.value
    });
  };

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangeDogsCapacity = event => {
    this.setState({
      capacity: {...this.state.capacity, dogs: event.target.value}
    });
  };

  handleChangeCatsCapacity = event => {
    this.setState({
      capacity: {...this.state.capacity, cats: event.target.value}
    });
  };

  handleSubmit = event => {
    this.props
      .updateHost(this.state)
      .then(() => this.props.getAllHosts())
      .then(() => this.handleClose());
  };

  render() {
    return (
      <Modal
        trigger={
          <Button className="submit-button" onClick={this.handleOpen}>
            <Icon color="teal" size="large" name="paw" />
            Update Profile!
          </Button>
        }
        open={this.state.open}
        onClose={this.handleClose}
        size="tiny"
      >
        <Header textAlign="center" verticalalign="middle" as="h1">
          Update Profile!
        </Header>

        <Form size="large">
          <Segment color="grey">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Name"
                onChange={this.handleChangeUpdateName}
                placeholder="First Name"
              />

              <Form.Input
                fluid
                label="Address"
                onChange={this.handleChangeUpdateAddress}
                placeholder="Address"
              />
              <Form.Input
                type="tel"
                fluid
                label="Phone Number"
                onChange={this.handleChangeUpdatePhoneNumber}
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
              type="email"
              fluid
              label="Email"
              onChange={this.handleChangeEmail}
              placeholder="E-Mail"
              />
            </Form.Group>
            <Form.Group>
            <Form.Input
                fluid
                label="Capacity Cats"
                onChange={this.handleChangeCatsCapacity}
                placeholder="Amount"
              />

              <Form.Input
                fluid
                label="Capacity Dogs"
                onChange={this.handleChangeDogsCapacity}
                placeholder="Amount"
              />
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

const mapStateToProps = state => {
  return { role: state.auth.user.type };
  // the second role is wherever in state "role" is located...
};

const mapDispatchToProps = { updateHost, getAllHosts };
// this is a shortcut for writing a function that uses the action creator....

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostModalUpdate);