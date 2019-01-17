import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import moment from "moment";
import AnimalList from "../AnimalList";
import { AnimalFilter } from "./AnimalFilter";
import { getAnimals } from '../../ActionCreators';

class AnimalListView extends Component {
  state = {
    filter: {},
    ageFilter: {
      greaterOrLessThan: '',
      years: '',
      months: ''
    }
  };

  componentDidMount = () => {
    this.props.getAnimals();
  };

  handleFilterNullableRadioChange = (event, { name, value }) => {
    const filter = { ...this.state.filter };
    if (this.state.filter[name] === value) {
      delete filter[name];
    } else {
      filter[name] = value;
    }
    this.setState({ filter });
  };

  handleFilterChange = (event, { name, value }) => {
    const filter = { ...this.state.filter };
    if (value === "Show All") {
      delete filter[name];
    } else {
      filter[name] = value;
    }
    this.setState({
      filter
    });
  };

  handleFilterChangeAge = (event, { name, value }) => {
    this.setState({
      ageFilter: {
        ...this.state.ageFilter,
        [name]: value
      }
    });
  };

  handleFilterClearAge = () => {
    this.setState({
      ageFilter: {
        greaterOrLessThan: '',
        years: '',
        months: ''
      }
    });
  };

  handleFilterToggle = (event, { name, value }) => {
    const filter = { ...this.state.filter };
    if (filter[name]) {
      delete filter[name];
    } else {
      filter[name] = true;
    }
    this.setState({
      filter
    });
  };

  render() {
    let animals = this.props.animals.filter(animal => {
      for (let key in this.state.filter) {
        if (typeof animal[key] === "string") {
          if (animal[key].toLowerCase() !== this.state.filter[key]) {
            return false;
          }
        } else {
          if (animal[key] !== this.state.filter[key]) {
            return false;
          }
        }
      }
      return true;
    });
    if (
      this.state.ageFilter &&
      this.state.ageFilter.greaterOrLessThan &&
      (this.state.ageFilter.years || this.state.ageFilter.months)
    ) {
      const cutoff = moment()
        .subtract(this.state.ageFilter.years, "years")
        .subtract(this.state.ageFilter.months, "months");
      animals = animals.filter(animal => {
        const dob = moment(animal.dob);
        if (this.state.ageFilter.greaterOrLessThan === "<") {
          return cutoff < dob;
        } else {
          return cutoff > dob;
        }
      });
    }
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
              ageFilter={this.state.ageFilter}
              filters={{
                handleChange: this.handleFilterChange,
                handleNullableRadioChange: this.handleFilterNullableRadioChange,
                handleToggle: this.handleFilterToggle,
                handleChangeAge: this.handleFilterChangeAge,
                handleFilterClearAge: this.handleFilterClearAge
              }}
              role={this.props.role}
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
        ["Show All"]
      )
      .sort((a, b) => {
        if (b === "Show All" || a.toLowerCase() < b.toLowerCase()) return -1;
      })
      .map(breed => ({ text: breed, value: breed })),
    role: state.auth.user.type
  };
};

const mapDispatchToProps = dispatch => ({
  getAnimals: () => dispatch(getAnimals())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalListView);
