import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiniListOfAnimals from "./AnimalImgScroll";
import {
  Image,
  Grid,
  Container,
  Segment
} from "semantic-ui-react";

class HostCard extends Component {
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
    const host = this.props.host;
    const hostProfilePic = host.photos[0];
    return (
      <Segment>
        <Grid>
          <Grid.Column width={2}>
            <Image
              as={Link}
              to={"/host/" + host.id}
              floated="left"
              size="tiny"
              src={hostProfilePic}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Container>
              <h4>{host.name}</h4>
              <span>{host.address}</span>
            </Container>
          </Grid.Column>
          <Grid.Column width={3}>
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
          </Grid.Column>
          <Grid.Column width={7}>
            <MiniListOfAnimals hostId={host.id} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const animalsAtHost = state.animals.filter(
    animal => animal.hostId === props.host.id
  );
  const qtyCatsAtHost = animalsAtHost.filter(animal => animal.species === "cat")
    .length;
  const qtyDogsAtHost = animalsAtHost.filter(animal => animal.species === "dog")
    .length;
  const catVacancies = parseInt(props.host.capacity.cats) - qtyCatsAtHost;
  const dogVacancies = parseInt(props.host.capacity.dogs) - qtyDogsAtHost;
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
)(HostCard);
