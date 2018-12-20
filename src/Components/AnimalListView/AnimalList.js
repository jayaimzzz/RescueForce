import React, { Component, Fragment } from "react";
import { AnimalCard } from "../AnimalCard";
import { connectRouter } from "connected-react-router";
import { connect } from "react-redux";

// const tempDevelopementData = ["one", "two", "three", "four"];

class AnimalList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.animals.map(animal => (
          <AnimalCard animal={animal} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};

const maptDispatchToProps = null;

export default connect(
  mapStateToProps,
  maptDispatchToProps
)(AnimalList);
