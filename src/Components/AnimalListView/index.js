import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import AnimalList from "../AnimalList";
import { AnimalFilter } from "./AnimalFilter";

class AnimalListView extends Component {
  state = {
    filter: {}
  };

  handleFilterNullableRadioChange = (event, { name, value }) => {
    console.log('yup')
    const filter = { ...this.state.filter };
    if (this.state.filter[name] === value) {
      delete filter[name];
    } else {
      filter[name] = value;
    }
    this.setState({ filter });
  };

  handleFilterChange = (event, { name, value }) => {
    const filter = {...this.state.filter };
    if (value === 'Show All') {
      delete filter[name];
    } else {
      filter[name] = value;
    }
    this.setState({
      filter
    });
  };

  render() {
    const animals = this.props.animals.filter(animal => {
      for (let key in this.state.filter) {
        if (animal[key] !== this.state.filter[key]) {
          return false;
        }
      }
      return true;
    });
    return (
      <Segment style={{ maxWidth: 1500, margin: "auto" }}>
        <Grid>
          <Grid.Column width={10}>
            <AnimalList animals={animals} />
          </Grid.Column>
          <Grid.Column width={6}>
            <AnimalFilter
              breeds={this.props.breeds}
              filter={this.state.filter}
              filters={{
                handleChange: this.handleFilterChange,
                handleNullableRadioChange: this.handleFilterNullableRadioChange
              }}
            />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const animals = state.animals.filter(
    animal => animal.species === props.animalType
  );
  return {
    animals,
    breeds: animals
      .reduce(
        (breedlist, animal) => {
          if (animal.breed && !breedlist.includes(animal.breed.toLowerCase())) {
            breedlist.push(animal.breed.toLowerCase());
            return breedlist;
          } else {
            return breedlist;
          }
        },
        ['Show All']
      ).sort((a, b) => {
        if (b === 'Show All' || a.toLowerCase() < b.toLowerCase()) return -1;
      })
      .map(breed => ({ text: breed, value: breed }))
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalListView);
