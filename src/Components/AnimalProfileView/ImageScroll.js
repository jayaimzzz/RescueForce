import React, { Component } from "react";
import { connect } from "react-redux";

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
  },
};

class ImageScroll extends Component {
  render() {
    console.log(this.props);
    const images = this.props.images;
    return (
      <div class="ui segment" style={styles.segment}>
        {images.map(image => (
          <img style={styles.img} class="ui medium image bordered" src={image}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    images: state.animals.find(animal => animal.id == props.animalId).pictures
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageScroll);
