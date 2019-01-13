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

const mapDispatchToProps = dispatch => ({
  getAnimals: filter => dispatch(getAnimals(filter))
});

export default connect(
  null,
  mapDispatchToProps
)(AnimalList);
