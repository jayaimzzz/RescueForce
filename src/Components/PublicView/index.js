import React, { Component, Fragment } from "react";
import Header from "./Header";
import HeaderImageScroll from "./HeaderImageScroll";

class PublicView extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ height: 200, backgroundColor: "blueviolet" }}>
          Public View
          <HeaderImageScroll animalId="1" />
        </div>
      </Fragment>
    );
  }
}

export { PublicView };
