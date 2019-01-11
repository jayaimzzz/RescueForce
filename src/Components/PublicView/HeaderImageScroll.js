import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Image, Segment } from "semantic-ui-react";
import { getAnimals } from "../../ActionCreators";

const styles = {
  img: {
    display: "inline-block",
    borderRadius: "5px",
    transition: "transform .2s",
    // width: "170px",
    // height: "150px",
    width: "200px",
    height: "120px",
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
    const animals = this.props.animals;
    return (
      <Segment style={styles.segment}>
        {animals.map((animal, index) => {
          return (
            <Image
            style={styles.img}
            size="small"
            bordered
            rounded
            verticalAlign="bottom"
            src={animal.photos[0]}
            key={`${animal._id}ImgNum${index}`}
            as={Link}
            to={"/animal/" + animal._id}
            />
          );
        })}
      </Segment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const adoptableAnimalsThatHavePictures = state.animals.filter(animal => animal.status === "adoptable" && animal.photos.length > 0);
  return {
    animals: adoptableAnimalsThatHavePictures
  };
};

const mapDispatchToProps = { getAnimals };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderImageScroll);
