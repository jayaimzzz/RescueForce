import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import Gallery from "react-photo-gallery";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import { GalleryImage } from "./Image";
import { updateAnimalPhotos } from "../../ActionCreators";

const SortableImage = SortableElement(GalleryImage);
const SortableGallery = SortableContainer(({ photos }) => {
  return <Gallery photos={photos} columns={4} ImageComponent={SortableImage} />;
});

class ImageEdit extends Component {
  state = {
    images:
      this.props.images.map(image => ({ src: image, width: 4, height: 3 })) ||
      []
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      images: arrayMove(this.state.images, oldIndex, newIndex)
    });
  };

  render() {
    return (
      <Modal
        style={{ width: "80vw" }}
        trigger={<Button>Edit Images</Button>}
        onClose={() =>
          this.props.updatePhotos(this.state.images.map(img => img.src))
        }
      >
        <Modal.Header>Edit Images</Modal.Header>
        <SortableGallery
          axis={"xy"}
          photos={this.state.images}
          onSortEnd={this.onSortEnd}
        />
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updatePhotos: photos =>
    dispatch(updateAnimalPhotos(ownProps.animalId, photos))
});

export default connect(
  null,
  mapDispatchToProps
)(ImageEdit);
