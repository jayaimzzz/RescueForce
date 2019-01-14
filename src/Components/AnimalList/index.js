import React, { Component, Fragment } from "react";
import { AnimalCard } from "./AnimalCard";
import { connect } from "react-redux";

class AnimalList extends Component {

  render() {
    return (
      <Fragment>
        {this.props.animals.map(animal => (
          <AnimalCard key={animal._id} animal={animal} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  let animals;
  if (props.filter) {
    animals = props.animals.filter(animal => {
      for (let key of Object.keys(props.filter)) {
        if (animal[key] !== props.filter[key]) {
          return false;
        }
      }      
      return true;
    })
  } else {
    animals = props.animals;
  }
  return { animals }
};

export default connect(
  mapStateToProps
)(AnimalList);
