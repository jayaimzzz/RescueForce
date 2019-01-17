import React, { Component } from "react";
import { connect } from "react-redux";
import ImageScroll from "./ImageScroll";
import AnimalProfile from "./AnimalProfile";
import { getAnimal } from "../../ActionCreators";

class AnimalProfileView extends Component {
  componentDidMount = () => {
    this.props.getAnimal(this.props.match.params.id);
  };

  render() {
    const animalId = this.props.match.params.id;
    return (
      <div>
        <ImageScroll animalId={animalId} />
        <AnimalProfile animalId={animalId} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAnimal: id => dispatch(getAnimal(id))
});

export default connect(null, mapDispatchToProps)(AnimalProfileView);
