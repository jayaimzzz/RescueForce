import React, { Component } from "react";
import { Button, Modal, Input, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import Gallery from "react-photo-gallery";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import { GalleryImage } from "./Image";
import { updateAnimalPhotos, uploadAnimalPhotos } from "../../ActionCreators";

const SortableImage = SortableElement(GalleryImage);
const SortableGallery = SortableContainer(({ photos }) => {
  return <Gallery photos={photos} columns={4} ImageComponent={SortableImage} />;
});

class ImageEdit extends Component {
  state = {
    newImages: null
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.updatePhotos(arrayMove(this.props.images, oldIndex, newIndex));
  };

  uploadImage = event => {
    event.preventDefault();
    if (this.state.newImages) {
      this.props.uploadPhotos(this.state.newImages);
    }
  };

  handleFileChange = event => {
    this.setState({
      newImages: event.target.files
    });
  };

  render() {
    const images =
      this.props.images.map(image => ({ src: image, width: 4, height: 3 })) ||
      [];
    return (
      <Modal
        style={{ width: "80vw" }}
        trigger={<Button>Edit Images</Button>}
        onClose={this.handleClose}
      >
        <Modal.Header>Edit Images</Modal.Header>
        <Form onSubmit={this.uploadImage} encType="multipart/form-data">
          <Form.Field>
            <Input
              type="file"
              label="Upload Images"
              id="images"
              name="images"
              accept="image/png, image/jpeg"
              multiple
              onChange={this.handleFileChange}
            />
          </Form.Field>
          <Button type="submit">Submit Photos</Button>
        </Form>
        <SortableGallery
          axis={"xy"}
          photos={images}
          onSortEnd={this.onSortEnd}
        />
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePhotos: photoUrls =>
    dispatch(updateAnimalPhotos(ownProps.animalId, photoUrls)),
  uploadPhotos: photos =>
    dispatch(uploadAnimalPhotos(ownProps.animalId, photos))
});

const mapStateToProps = (state, ownProps) => ({
  images: state.animals.find(animal => animal._id === ownProps.animalId).photos
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageEdit);
