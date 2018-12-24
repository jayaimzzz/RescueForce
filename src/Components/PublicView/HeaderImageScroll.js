import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

const styles = {
  img: {
    display: "inline-block",
    borderRadius: "5px",
    transition: "transform .2s",
    width: "120px",
    height: "100px",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no repeat",
    backgroundSize: "cover",
    padding: "10px"
  },
  segment: {
    overflowX: "scroll",
    whiteSpace: "nowrap",
    borderRadius: "5px",
    backgroundColor: "darkgrey"
  }
};

class HeaderImageScroll extends Component {
  render() {
    const images = this.props.images;
    return (
      <div className="ui segment" style={styles.segment}>
        {images.map((image, index) => (
          <Image
            style={styles.img}
            size="small"
            bordered
            src={image}
            key={`${this.props.animalId}ImgNum${index}`}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    images: state.animals.find(animal => animal.id === props.animalId).pictures
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderImageScroll);
