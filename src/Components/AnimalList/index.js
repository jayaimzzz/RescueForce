import React, { Component, Fragment } from "react";
import { AnimalCard } from "./AnimalCard";
import { connect } from "react-redux";
import { getAnimals } from "../../ActionCreators";

class AnimalList extends Component {
  componentDidMount() {
    this.props.getAnimals();
  }
  
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
  const filter = props.filter;
  const filterKey = Object.keys(filter)[0];
  return {
    animals: state.animals.filter(animal => {
      if (animal[filterKey]){
        const animalKeyValue = animal[filterKey]._id || animal[filterKey]
        return animalKeyValue === filter[filterKey]
      } else {
        return false
      }
    })
  }
};

const mapDispatchToProps = dispatch => ({
  getAnimals: filter => dispatch(getAnimals(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalList);
