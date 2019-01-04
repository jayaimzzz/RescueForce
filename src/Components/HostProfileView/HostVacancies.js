import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";

class HostVacancies extends Component {
  render() {
    const styles = {
      vacancies: {
        color: "green"
      },
      noVacancies: {
        color: "red"
      }
    };
    const catVacancies = this.props.vacancies.cat;
    const dogVacancies = this.props.vacancies.dog;
    return (
            <Segment>
              <h5>Vacancies</h5>
              {catVacancies !== 0 && (
                <p
                  style={
                    catVacancies > 0 ? styles.vacancies : styles.noVacancies
                  }
                >
                  Cat: {catVacancies}
                </p>
              )}
              {dogVacancies !== 0 && (
                <p
                  style={
                    dogVacancies > 0 ? styles.vacancies : styles.noVacancies
                  }
                >
                  Dog: {dogVacancies}
                </p>
              )}
              {catVacancies === 0 && dogVacancies === 0 && <p>none</p>}
            </Segment>
          
    );
  }
}

const mapStateToProps = (state, props) => {

  const animalsAtHost = state.animals.filter(
    animal => animal.hostId === props.host._id
  );
  const qtyCatsAtHost = animalsAtHost.filter(animal => animal.species === "cat")
    .length;
  const qtyDogsAtHost = animalsAtHost.filter(animal => animal.species === "dog")
    .length;
    
  const catVacancies = typeof props.host.capacity !== "undefined" ? parseInt(props.host.capacity.cats) - qtyCatsAtHost: 0 - qtyCatsAtHost;
  const dogVacancies = typeof props.host.capacity !== "undefined" ? parseInt(props.host.capacity.dogs) - qtyDogsAtHost: 0 - qtyDogsAtHost;
  return {
    vacancies: {
      cat: catVacancies,
      dog: dogVacancies
    }
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostVacancies);
