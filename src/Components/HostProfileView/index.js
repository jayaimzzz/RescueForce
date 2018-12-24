import React, { Component, Fragment } from "react";
import HostProfile from "./HostProfile";
import AnimalList from "../AnimalList";

class HostProfileView extends Component {
  render() {
    const hostId = "1"
    return (
      <Fragment>
        <div style={{ height: 200, backgroundColor: "red", margin: 10 }}>
          Host Profile View
        </div>
        <div style={{ float: "left", width: "fit-content" }}>
          <HostProfile hostId={hostId}/>
        </div>
        <div style={{ float: "left" }}>
          <AnimalList hostId={hostId}/>
        </div>
      </Fragment>
    );
  }
}

export { HostProfileView };
