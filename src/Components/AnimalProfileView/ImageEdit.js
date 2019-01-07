import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import Gallery from "react-photo-gallery";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import { GalleryImage } from './Image';

const SortableImage = SortableElement(GalleryImage);
const SortableGallery = SortableContainer(({photos}) => {
  return <Gallery photos={photos} columns={5} ImageComponent={SortableImage} />;
});

class ImageEdit extends Component {
  state = {
    images: this.props.images.map(image => ({src: image, width: 4, height: 3})) || []
  };

  render() {
    return (
      <Modal trigger={<Button>Edit Images</Button>}>
        <Modal.Header>Edit Images</Modal.Header>
        <SortableGallery axis={"xy"} photos={this.state.images} />
      </Modal>
    );
  }
}

export default ImageEdit;
