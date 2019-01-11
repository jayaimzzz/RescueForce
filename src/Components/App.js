import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { Button, Sticky } from "semantic-ui-react";
import {
  AnimalListView,
  AnimalProfileView,
  HostListView,
  HostProfileView,
  Login,
  FrontPageNav,
  PublicView,
  Register,
  ShelterAdminPortal
} from "./index";
import { logout } from "../ActionCreators/index";
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
        <div
          style={{
            height: 50,
            backgroundColor: "#B0B0B8",
          }}
        >
          <div
            style={{
              width: "80vw",
              height: "inherit",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Link to="/cats">Cats</Link>
            <Link to="/dogs">Dogs</Link>
            {this.props.role === "shelter" && (
              <Fragment>
                <Link to="/admin">Admin</Link> <Link to="/hosts">Hosts</Link>
              </Fragment>
            )}
            {this.props.role === "host" && (
              <Link to={`/host/${this.props.user._id}`}>Home</Link>
            )}
          </div>
        </div>
        {this.props.isLoggedIn ? (
          <Button primary onClick={() => this.props.logout()}>
            Logout
          </Button>
        ) : (
          <Sticky>
            <Button
              className="ui right floated primary button"
              style={{
                backgroundColor: "#000000",
                marginRight: "14px"
              }}
              primary
              onClick={() => this.props.navToLogin()}
            >
              Login
            </Button>
          </Sticky>
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
  isLoggedIn: state.auth.user ? Boolean(state.auth.user.token) : false,
  role: state.auth.user ? state.auth.user.type : "public",
  user: state.auth.user ? state.auth.user.data : null
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
