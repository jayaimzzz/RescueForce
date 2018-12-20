import React, { Component, Fragment } from "react";
import { HostProfile } from "./HostProfile";
import AnimalList from "../AnimalListView/AnimalList";

class HostProfileView extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ height: 200, backgroundColor: "red", margin: 10 }}>
          Host Profile View
        </div>
        <div style={{ float: "left", width: "fit-content" }}>
          <HostProfile />
        </div>
        <div style={{ float: "left" }}>
          <AnimalList host="hostId" />
        </div>
      </Fragment>
    );
  }
}

export { HostProfileView };
