import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { AnimalListView, AnimalProfileView, HostProfileView } from "./index";
import { CAT, DOG, EXOTIC } from '../Constants';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>Rescue Force</div>
        <Switch>
          <Route exact path="/host/:id" component={HostProfileView} />
          <Route exact path="/animal/:id" component={AnimalProfileView} />
          <Route exact path="/cats" render={() => <AnimalListView type={CAT}/>} />
          <Route exact path="/dogs" render={() => <AnimalListView type={DOG}/>} />
          <Route exact path="/exotics" render={() => <AnimalListView type={EXOTIC}/>} />
        </Switch>
        <AnimalListView />
      </Fragment>
    );
  }
}

export default App;
