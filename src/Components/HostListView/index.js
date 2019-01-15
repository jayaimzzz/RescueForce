import React, { Component } from "react";
import { connect } from "react-redux";
import HostCard from "./HostCard";
import HostFilter from "./HostFilter";
import HostListHeader from "./HostListHeader";
import { getAllHosts, getAnimals } from "../../ActionCreators";

class HostListView extends Component {
  state = {
    filters: {
      textFilters: {
        name: "",
        email: ""
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
    }
  };

  componentDidMount = () => {
    this.props.getAllHosts();
    this.props.getAnimals();
  };

  handleChangeRange = species => (event, { name, value }) => {
    this.setState({
      filters: {
        ...this.state.filters,
        capacityFilter: {
          ...this.state.filters.capacityFilter,
          [species]: {
            ...this.state.filters.capacityFilter[species],
            [name]: value
          }
        }
      }
    });
  };

  handleChangeTextFilter = (event, { name, value }) => {
    this.setState({
      filters: {
        ...this.state.filters,
        textFilters: {
          ...this.state.filters.textFilters,
          [name]: value
        }
      }
    });
  };

  handleClearFilters = () => {
    this.setState({
      filters: {
        textFilters: {
          name: "",
          email: ""
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
      }
    });
  };

  render() {
    let hosts = this.props.hosts
      .filter(host => {
        for (let key in this.state.filters.textFilters) {
          if (
            !host[key] ||
            !host[key].includes(this.state.filters.textFilters[key])
          ) {
            return false;
          }
        }
        return true;
      })
      .filter(host => {
        for (let species in this.state.filters.capacityFilter) {
          if (
            this.state.filters.capacityFilter[species].capacity &&
            this.state.filters.capacityFilter[species].greaterOrLessThan
          ) {
            if (
              this.state.filters.capacityFilter[species].greaterOrLessThan ===
              "<"
            ) {
              return (
                Number(host.capacity[species]) <
                Number(this.state.filters.capacityFilter[species].capacity)
              );
            } else {
              return (
                Number(host.capacity[species]) >
                Number(this.state.filters.capacityFilter[species].capacity)
              );
            }
          } else {
            return true;
          }
        }
      });

    return (
      <div style={{ padding: "10px" }}>
        <HostListHeader shelter={this.props.shelter} />
        <HostFilter
          handleChangeTextFilter={this.handleChangeTextFilter}
          dogCapacityFilter={{
            handleChangeRange: this.handleChangeRange("dogs")
          }}
          catCapacityFilter={{
            handleChangeRange: this.handleChangeRange("cats")
          }}
          filterValues={this.state.filters}
          clearFilters={this.handleClearFilters}
        />
        {hosts.map(host => (
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
