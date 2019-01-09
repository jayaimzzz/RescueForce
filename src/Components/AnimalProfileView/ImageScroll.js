import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Segment } from "semantic-ui-react";
import ImageEdit from "./ImageEdit";

const styles = {
  img: {
    display: "inline-block",
    borderRadius: "5px",
    transition: "transform .2s"
  },
  segment: {
    overflowX: "scroll",
    whiteSpace: "nowrap",
    borderRadius: "5px"
  }
};

class ImageScroll extends Component {
  render() {
    const images = this.props.images;
    return (
      <Segment style={{backgroundColor: "black"}}>
        <div className="ui segment" style={styles.segment}>
          {images.map((image, index) => (
            <Image
              style={styles.img}
              size="medium"
              bordered
              src={image}
              key={`${this.props.animalId}imgNum${index}`}
            />
          ))}
        </div>
        <ImageEdit animalId={this.props.animalId} />
      </Segment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    images: state.animals.find(animal => animal._id === props.animalId).photos
  };
};

export default connect(mapStateToProps)(ImageScroll);
