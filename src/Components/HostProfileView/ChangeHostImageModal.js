import React, { Component } from "react";
import { Button, Form, Header, Icon, Input, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { HOST } from "../../Constants";
import { uploadPhoto } from "../../ActionCreators";

class ChangeHostImageModal extends Component {
  state = {
    open: false,
    newImage: null
  };

  handleToggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  uploadImage = event => {
    event.preventDefault();
    if (this.state.newImage) {
      this.props.uploadPhoto(this.state.newImage);
    }
    this.handleToggleOpen();
  };

  handleImageChange = event => {
    this.setState({
      newImage: event.target.files[0]
    });
  };

  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.handleToggleOpen}>
            <Icon color="red" size="large" name="paw" />
            Change Host Image
          </Button>
        }
        open={this.state.open}
        onClose={this.handleToggleOpen}
        size="tiny"
      >
        <Header>Update Host Image</Header>
        <Form onSubmit={this.uploadImage} encType="multipart/form-data">
          <Input
            type="file"
            label="Upload Image"
            id="images"
            name="image"
            accept="image/png, image/jpeg"
            onChange={this.handleImageChange}
          />
          <Button disabled={this.props.inProgress} type="submit">
            Update Photo
          </Button>
        </Form>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadPhoto: photo => dispatch(uploadPhoto(HOST, ownProps.id, photo))
});

const mapStateToProps = state => ({
  inProgress: state.inProgress.changeHostPhoto
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeHostImageModal);
