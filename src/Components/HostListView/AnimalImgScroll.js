import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    Image,
    Segment
  } from "semantic-ui-react";

const styles = {
    img: {
    },
    segment: {
      overflowX: "scroll",
      whiteSpace: "nowrap",
      borderRadius: "5px",
    }
  };
  
  class MiniListOfAnimals extends Component {
    render() {
      return (
        <Segment style={styles.segment}>
        <Image.Group size="tiny">
          {this.props.animals.map((animal, index) => (
              <Image
              style={styles.img}
              size="tiny"
              as={Link}
              to={`/animal/${animal._id}`}
              circular
              spaced="right"
              src={animal.photos[0]}
              key={`${this.props.animalId}imgNum${index}`}
              verticalAlign="bottom"
              >
              </Image>  
          ))}
          </Image.Group>
        </Segment>
      );
    }
  }

const mapStateToProps = (state, props) => {
    return {
        animals: state.animals.filter(animal => animal.hostId === props.hostId)
    }
}

const mapDisPatchToProps = null;

export default connect(mapStateToProps, mapDisPatchToProps)(MiniListOfAnimals)