import React, { Component } from "react";
import {
  Form,
  Button,
  Modal,
  Icon,
  Header,
  Segment,
  Radio
} from "semantic-ui-react";
import { connect } from "react-redux";

class ModalUpdate extends Component {
  state = {
    open: false,
    shelter: this.props.shelter
  };

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
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
        ....
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  shelter: state.auth.user.data
});

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalUpdate);
