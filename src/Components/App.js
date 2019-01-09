import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import {
  AnimalListView,
  AnimalProfileView,
  HostListView,
  HostProfileView,
  Login,
  Nav,
  PublicView,
  Register,
  ShelterAdminPortal
} from "./index";
import { logout } from "../ActionCreators/index";
import { DevNav } from "./DevNav";
import { CAT, DOG, EXOTIC } from "../Constants";
import { getShelterById } from "../ActionCreators";

class App extends Component {
  renderMain = () => (
    <Fragment>
      <Nav />
      <DevNav />
      <PublicView />
    </Fragment>
  );

  componentDidMount = () => {
    this.props.getShelterById("5c2511cafd2a4e05c5db0a60");
  };

  render() {
    return (
      <Fragment>
        <div />
        {this.props.isLoggedIn ? (
          <Button primary onClick={() => this.props.logout()}>
            Logout
          </Button>
        ) : (
          <Button primary onClick={() => this.props.navToLogin()}>
            Login
          </Button>
        )}
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
  isLoggedIn: state.auth.user ? Boolean(state.auth.user.token) : false
});

const mapDispatchToProps = dispatch => {
  return {
    getShelterById: shelterId => dispatch(getShelterById(shelterId)),
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
