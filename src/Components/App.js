import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { AnimalListView, AnimalProfileView, HostView } from "./index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>Rescue Force</div>
        <Switch>
          <Route exact path="/host/:id" component={HostView} />
          <Route exact path="/animal/:id" component={AnimalProfileView} />
        </Switch>
        <AnimalListView />
      </Fragment>
    );
  }
}

export default App;
