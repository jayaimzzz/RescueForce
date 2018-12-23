import React, { Component } from "react";
import { HostCard } from "./HostCard";
import { HostFilter } from "./HostFilter";

const tempDevelopmentHosts = ["one", "two", "three", "four"];

class HostListView extends Component {
  render() {
    return (
      <div style={{ height: 1000, backgroundColor: "orange", margin: 10 }}>
        Host List View
        <HostFilter />
        {tempDevelopmentHosts.map(host => (
          <HostCard key={host} host={host} />
        ))}
      </div>
    );
  }
}

export { HostListView };
