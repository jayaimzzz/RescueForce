import React, { Component } from "react";
import { connect } from "react-redux";
import HostCard from "./HostCard";
import HostFilter from "./HostFilter";
import HostListHeader from "./HostListHeader";
import { getAllHosts, getAnimals } from "../../ActionCreators";

class HostListView extends Component {
  state = {
    filter: {
      capacity: {
        cats: "",
        dogs: ""
      }
    },
    capacityFilter: {
      cats: {
        capacity: "",
        greaterOrLessThan: ""
      },
      dogs: {
        capacity: "",
        greaterOrLessThan: ""
      }
    }
  };

  componentDidMount = () => {
    this.props.getAllHosts();
    this.props.getAnimals();
  };

  handleChangeRange = species => (event, { name, value }) => {
    this.setState({
      capacityFilter: {
        ...this.state.capacityFilter,
        [species]: {
          ...this.state.capacityFilter[species],
          [name]: value
        }
      }
    });
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <HostListHeader shelter={this.props.shelter} />
        <HostFilter
          dogCapacityFilter={{
            handleChangeRange: this.handleChangeRange("dog"),
          }}
          catCapacityFilter={{
            handleChangeRange: this.handleChangeRange("cat"),
          }}
          filters={{ handleChangeRange: this.handleChangeRange }}
        />
        {this.props.hosts.map(host => (
          <HostCard key={"hostId" + host._id} host={host} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const loggedInUser = state.auth.user;
  let shelter = {};
  let hosts = [];
  if (loggedInUser.type === "shelter") {
    shelter = loggedInUser.data;
    hosts = state.hosts;
  }
  if (loggedInUser.type === "host") {
    shelter = loggedInUser.data.shelterId;
    hosts = [loggedInUser];
  }
  return {
    hosts: hosts,
    shelter: shelter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllHosts: () => dispatch(getAllHosts()),
    getAnimals: filter => dispatch(getAnimals(filter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostListView);
