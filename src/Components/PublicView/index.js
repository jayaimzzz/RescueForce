import React, { Component, Fragment } from "react";
import Header from "./Header";
import HeaderImageScroll from "./HeaderImageScroll";

class PublicView extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            height: 200,
            backgroundColor: "#f7f8f9",
            textAlign: "center",
            fontFamily: "fantasy",
            fontSize: "20px"
          }}
        >
          Rescue Force - Public View
          {/* <HeaderImageScroll animalId="1" /> */}
        </div>
      </Fragment>
    );
  }
}

export { PublicView };
