import React, { Component, Fragment } from "react";
import { AnimalListView } from "./index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>Rescue Force</div>
        <AnimalListView />
      </Fragment>
    );
  }
}

export default App;
