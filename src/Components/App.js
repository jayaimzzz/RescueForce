import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { Button, Sticky } from "semantic-ui-react";
import {
  AnimalListView,
  AnimalProfileView,
  FrontPageNav,
  HostListView,
  HostProfileView,
  Login,
  FrontPageNav,
  PublicView,
  Register,
  ShelterAdminPortal,
  Nav
} from "./index";
import { logout } from "../ActionCreators";
import { DevNav } from "./DevNav";
import { CAT, DOG, EXOTIC } from "../Constants";
import { getShelterById, getAllShelters } from "../ActionCreators";

class App extends Component {
  renderMain = () => (
    <Fragment>
      <FrontPageNav />
      <DevNav />
      <PublicView />
    </Fragment>
  );

  componentDidMount = () => {
    this.props.getAllShelters();
  };

  render() {
    return (
      <Fragment>
        <Nav/> 
        <Switch>
          <Route exact path="/host/:id" component={HostProfileView} />
          <Route exact path="/hosts" component={HostListView} />
          <Route exact path="/animal/:id" component={AnimalProfileView} />
          <Route
            exact
            path="/cats"
            render={() => <AnimalListView animalType={CAT} />}
          />
          <Route
            exact
            path="/dogs"
            render={() => <AnimalListView animalType={DOG} />}
          />
          <Route
            exact
            path="/exotics"
            render={() => <AnimalListView animalType={EXOTIC} />}
          />
          <Route exact path="/admin" component={ShelterAdminPortal} />
          <Route exact path="/" render={this.renderMain} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.user ? Boolean(state.auth.user.token) : false,
});

const mapDispatchToProps = dispatch => {
  return {
    getShelterById: shelterId => dispatch(getShelterById(shelterId)),
    getAllShelters: () => dispatch(getAllShelters()),
    logout: () => dispatch(logout()),
    navToLogin: () => dispatch(push("/login"))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
