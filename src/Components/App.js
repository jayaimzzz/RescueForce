import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { AnimalListView, AnimalProfileView, FosterFamilyView } from "./index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>Rescue Force</div>
        <Switch>
          <Route exact path="/foster/:id" component={FosterFamilyView} />
          <Route exact path="/animal/:id" component={AnimalProfileView} />
        </Switch>
        <AnimalListView />
      </Fragment>
    );
  }
}

export default App;
