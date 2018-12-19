import React, { Component } from "react";
import React, { Component, Fragment } from "react";
import { AnimalListView } from "./index";
import { AnimalCard } from "./index";

class App extends React {
  render() {
    return (
      <Fragment>
        <AnimalListView />
        <AnimalCard />
      </Fragment>
    );
  }
}

export default App;
