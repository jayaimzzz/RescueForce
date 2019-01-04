import React, { Component } from "react";
import { connect } from "react-redux";
import HostCard from "./HostCard";
import { HostFilter } from "./HostFilter";
import { getAllHosts } from "../../ActionCreators"

class HostListView extends Component {
  componentDidMount = () => {
    this.props.getAllHosts();
  }

  render() {
    return (
      <div style={{ height: 1000, backgroundColor: "orange", margin: 10 }}>
        Host List View
        <HostFilter />
        {this.props.hosts.map(host => (
          <HostCard key={"hostId" + host._id } host={host} />
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

const mapDispatchToProps = dispatch => {
  return {
    getAllHosts: () => dispatch(getAllHosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostListView);
