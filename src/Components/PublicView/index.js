import React, { Component, Fragment } from "react";
import { Header } from "./Header";

class PublicView extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div style={{ height: 200, backgroundColor: "blueviolet" }}>
          Public View
        </div>
      </Fragment>
    );
  }
}

export { PublicView };
