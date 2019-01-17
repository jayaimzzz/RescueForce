import React, { Component } from "react";
import { Segment, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import ModalAddAnimal from "./ModalAddAnimal";
import ShelterProfile from "./ShelterProfile";
import { getAnimals } from "../../ActionCreators";
import { colors } from "../../Constants";

class ShelterAdminPortal extends Component {
  componentDidMount = () => {
    this.props.getAnimals();
  };

  render() {
    return (
      <Segment style={{ width: "80vw", margin: "auto", backgroundColor: colors.backgroundA }}>
        <ShelterProfile />
        <div
          style={{
            margin: "auto",
            marginTop: 50,
            width: "40vw",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ModalAddAnimal />
          <Button onClick={this.props.navToDogsList}>
            <Icon color="red" size="large" name="paw" />
            View Dogs
          </Button>
          <Button onClick={this.props.navToCatsList}>
            <Icon color="red" size="large" name="paw" />
            View Cats
          </Button>
          <Button onClick={this.props.navToHostList}>
            <Icon color="red" size="large" name="paw" />
            View Hosts
          </Button>
        </div>
      </Segment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navToDogsList: () => dispatch(push("/dogs")),
  navToCatsList: () => dispatch(push("/cats")),
  navToHostList: () => dispatch(push("/hosts")),
  getAnimals: () => dispatch(getAnimals())
});

export default connect(
  null,
  mapDispatchToProps
)(ShelterAdminPortal);
