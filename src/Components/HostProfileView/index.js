import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import HostProfile from "./HostProfile";
import AnimalList from "../AnimalList";

class HostProfileView extends Component {
  render() {
    const hostId = this.props.host._id
    console.log(hostId)
    return (
      <Fragment>
        <div style={{ height: 200, backgroundColor: "red", margin: 10 }}>
          Host Profile View
        </div>
        <div style={{ float: "left", width: "fit-content" }}>
          <HostProfile host={this.props.host} shelter={this.props.shelter} canEdit={this.props.canEdit}/>
        </div>
        <div style={{ float: "left" }}>
          <AnimalList filter={{hostId}}/>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const loggedInUser = state.auth.user
  const hostId = props.match.params.id
  let host = {};
  let shelter = {};
  if(loggedInUser.type === "shelter") {
      host = state.hosts.find(host => host._id === hostId);
      shelter = state.shelters.find(shelter => shelter._id === host.shelterId._id);
    };
  if(loggedInUser.type === "host"){
      host = loggedInUser.data;
      shelter = state.shelters.find(shelter => shelter._id === host.shelterId);
    };
  console.log(host)
  const canEdit = loggedInUser.data._id === hostId
  console.log(shelter)
  return {
    host: host,
    shelter: shelter,
    canEdit: canEdit
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostProfileView)
