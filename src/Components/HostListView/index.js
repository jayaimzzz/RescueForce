import React, { Component } from "react";
import { connect } from "react-redux";
import HostCard from "./HostCard";
import { HostFilter } from "./HostFilter";

class HostListView extends Component {
  render() {
    return (
      <div style={{ height: 1000, backgroundColor: "orange", margin: 10 }}>
        Host List View
        <HostFilter />
        {this.props.hosts.map(host => (
          <HostCard key={"hostId" + host.id } host={host} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hosts: state.hosts
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostListView);
