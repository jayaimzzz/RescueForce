import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import { getAnimals } from "../../ActionCreators";

const styles = {
  img: {
    display: "inline-block",
    borderRadius: "5px",
    transition: "transform .2s",
    width: "170px",
    height: "150px",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no repeat",
    backgroundSize: "cover",
    padding: "10px",
    backgroundColor: "#D8D8E4",
    margin: "10px"
  },
  segment: {
    margin: "auto",
    paddingTop: "20px",
    paddingBottom: "20px",
    overflowX: "scroll",
    whiteSpace: "nowrap",
    borderRadius: "5px",
    backgroundColor: "#D8D8E4"
  }
};

class HeaderImageScroll extends Component {
  componentDidMount() {
    this.props.getAnimals();
  }
  render() {
    const images = this.props.images;
    return (
      <div className="ui segment" style={styles.segment}>
        {images.map((image, index) => {
          console.log(image);
          return (
            <Image
              style={styles.img}
              size="small"
              bordered
              src={image}
              key={`${this.props.animalId}ImgNum${index}`}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const animals = state.animals.filter(
    animal => animal.status === "adoptable" && animal.photos.length > 0
  );
  return {
    images: animals.map(animal => animal.photos[0]) || []
  };
};

const mapDispatchToProps = { getAnimals };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderImageScroll);
