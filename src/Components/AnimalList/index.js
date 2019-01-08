import React, { Component, Fragment } from "react";
import { AnimalCard } from "./AnimalCard";
import { connectRouter } from "connected-react-router";
import { connect } from "react-redux";
import { getAnimals } from "../../ActionCreators";
import { AnimalListNavBar } from "./AnimalListNavBar";

class AnimalList extends Component {
  componentDidMount() {
    this.props.getAnimals(this.props.filter);
  }

  render() {
    return (
      <div>
        <Fragment>
          {this.props.animals.map(animal => (
            <AnimalCard key={animal._id} animal={animal} />
          ))}
        </Fragment>
        <AnimalListNavBar />
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   if (props.hostId){
//     return {
//       animals: state.animals.filter(animal => animal.hostId === props.hostId)
//     };
//   } else {
//     return {
//       animals: state.animals
//     }
//   }
// };

const mapDispatchToProps = dispatch => ({
  getAnimals: filter => dispatch(getAnimals(filter))
});

const mapStateToProps = (state, props) => ({
  animals: state.animals
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalList);
