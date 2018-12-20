import React, { Component } from "react";
import { connect } from "react-redux";

const imgStyles = {
  display: "inline-block",
  borderRadius: "5px"
}

const segmentStyles = {
  overflowX: "scroll",
  whiteSpace: "nowrap",
  borderRadius: "5px"
}

class ImageScroll extends Component {
  render() {
    console.log(this.props)
    const images = this.props.images
    return(
      <div class="ui segment" style={segmentStyles}>
        {images.map(image => <img style={imgStyles} class="ui small image bordered" src={image}></img>)}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    images: state.animals.find(animal => animal.id == props.animalId).pictures
  }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ImageScroll)