import React from "react";
import { Form, Button, Modal, Icon, Header, Segment } from "semantic-ui-react";
import { updateHost, getAllHosts } from "../../ActionCreators";
import { connect } from "react-redux";

class HostModalUpdate extends React.Component {
  state = {
    open: false,
    host: this.props.host
  };

  handleOpen = event => {
    this.setState({
      open: true,
      host: this.props.host
    });
  };

  handleClose = event => {
    this.setState({
      open: false
    });
  };

  handleChange = (event, { name, value }) => {
    this.setState({
      host: { ...this.state.host, [name]: value }
    });
  };

  handleChangeCapacity = (event, { name, value }) => {
    this.setState({
      host: {
        ...this.state.host,
        capacity: { ...this.state.host.capacity, [name]: Number(value) }
      }
    });
  };

  handleSubmit = event => {
    const {
      name,
      email,
      address,
      phoneNumber,
      capacity,
      _id
    } = this.state.host;
    const host = { name, email, address, phoneNumber, capacity, _id };
    this.props
      .updateHost(host)
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
                name="name"
                onChange={this.handleChange}
                value={this.state.host.name}
                placeholder="First Name"
              />

              <Form.Input
                fluid
                label="Address"
                name="address"
                onChange={this.handleChange}
                value={this.state.host.address}
                placeholder="Address"
              />
              <Form.Input
                type="tel"
                fluid
                label="Phone Number"
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.host.phoneNumber}
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                type="email"
                fluid
                label="Email"
                name="email"
                value={this.state.host.email}
                onChange={this.handleChange}
                placeholder="E-Mail"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                fluid
                type="number"
                label="Capacity Cats"
                name="cats"
                value={
                  this.state.host.capacity && this.state.host.capacity.cats
                }
                onChange={this.handleChangeCapacity}
                placeholder="Amount"
              />

              <Form.Input
                fluid
                type="number"
                label="Capacity Dogs"
                name="dogs"
                value={
                  this.state.host.capacity && this.state.host.capacity.dogs
                }
                onChange={this.handleChangeCapacity}
                placeholder="Amount"
              />
            </Form.Group>
          </Segment>
        </Form>

        <Modal.Actions>
          <Button.Group fluid>
            <Button
              className="submit-button"
              disabled={this.props.inProgress}
              onClick={this.handleSubmit}
            >
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
  return {
    role: state.auth.user.type,
    inProgress: state.inProgress.hostProfileUpdate
  };
  // the second role is wherever in state "role" is located...
};

const mapDispatchToProps = { updateHost, getAllHosts };
// this is a shortcut for writing a function that uses the action creator....

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostModalUpdate);
