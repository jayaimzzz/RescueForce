import React, { Component } from "react";
import { HostCard } from "./HostCard";

const tempDevelopmentHosts = ["one", "two", "three", "four"];

class HostListView extends Component {
  render() {
    return (
      <div style={{ height: 200, backgroundColor: "orange", margin: 10 }}>
        Host List View
        {tempDevelopmentHosts.map(host => (
          <HostCard key={host} host={host} />
        ))}
      </div>
    );
  }
}

export { HostListView };
