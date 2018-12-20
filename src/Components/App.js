import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
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
import { DevNav } from "./DevNav";
import { CAT, DOG, EXOTIC } from "../Constants";

class App extends Component {
  renderMain = () => (
    <Fragment>
      <DevNav />
      <PublicView />
    </Fragment>
  );

  render() {
    return (
      <Fragment>
        <div>Rescue Force</div>
        <Nav />
        <Switch>
          <Route exact path="/host/:id" component={HostProfileView} />
          <Route exact path="/hosts" component={HostListView} />
          <Route exact path="/animal/:id" component={AnimalProfileView} />
          <Route
            exact
            path="/cats"
            render={() => <AnimalListView type={CAT} />}
          />
          <Route
            exact
            path="/dogs"
            render={() => <AnimalListView type={DOG} />}
          />
          <Route
            exact
            path="/exotics"
            render={() => <AnimalListView type={EXOTIC} />}
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

export default App;
