import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import HostProfile from "./HostProfile";
import AnimalList from "../AnimalList";
import { Header } from "semantic-ui-react";

class HostProfileView extends Component {
  render() {
    const hostId = this.props.host._id
    return (
      <Fragment>
        <div style={{}}>
          {this.props.canEdit && (
            <Header>Welcome {this.props.host.name}</Header>
          )}
        </div>
        <div style={{ float: "left", width: "fit-content" }}>
        <HostProfile host={this.props.host} shelter={this.props.shelter} canEdit={this.props.canEdit}/>
        </div>
        <div style={{ float: "left" }}>
          <Header>{this.props.host.name}'s current foster animals</Header>
          <AnimalList filter={{hostId}}/>
          {this.props.canEdit && (
            <div>
            <Header>Animals in need of a foster home</Header>
            <AnimalList filter={{status:"need-foster"}}/>
          </div>
          )}
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
      // shelter = state.shelters.find(shelter => shelter._id === host.shelterId);
      shelter = host.shelterId;
    };
  const canEdit = loggedInUser.data._id === hostId
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