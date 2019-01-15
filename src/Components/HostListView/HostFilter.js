import React, { Component } from "react";
import {
  Button,
  Form,
  Header,
  Icon,
  Input,
  Modal,
  Segment
} from "semantic-ui-react";

class HostFilter extends Component {
  state = {
    open: false
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    return (
      <Modal
        trigger={
          <Button onClick={this.toggleOpen}>
            <Icon color="teal" size="large" name="paw" />
            Filter Hosts!
          </Button>
        }
        size="small"
        open={this.state.open}
        onClose={this.toggleOpen}
      >
        <Header textAlign="center" verticalalign="middle" as="h1">
          Filter Hosts
        </Header>
        <Form size="large">
          <Form.Group widths="equal" inline>
            <Input
              label="name"
              name="name"
              onChange={this.props.handleChangeTextFilter}
              value={this.props.filterValues.textFilters.name}
              placeholder="Name"
            />
            <Input
              label="email"
              name="email"
              onChange={this.props.handleChangeTextFilter}
              value={this.props.filterValues.textFilters.email}
              placeholder="Email"
            />
          </Form.Group>
          <Segment>
            <Header
              style={{ width: "100%", margin: "auto", textAlign: "center" }}
            >
              Dog Capacity
            </Header>
            <Form.Select
              name="greaterOrLessThan"
              label="< / >"
              options={[
                { text: "Show All", value: "" },
                { text: "<", value: "<" },
                { text: ">", value: ">" }
              ]}
              onChange={this.props.dogCapacityFilter.handleChangeRange}
              value={
                this.props.filterValues.capacityFilter.dogs.greaterOrLessThan
              }
            />
            <Form.Input
              type="number"
              label="Dog Capacity"
              name="capacity"
              onChange={this.props.dogCapacityFilter.handleChangeRange}
              value={this.props.filterValues.capacityFilter.dogs.capacity}
            />
          </Segment>
          <Segment>
            <Header
              style={{ width: "100%", margin: "auto", textAlign: "center" }}
            >
              Cat Capacity
            </Header>
            <Form.Select
              name="greaterOrLessThan"
              label="< / >"
              options={[
                { text: "Show All", value: "Show All" },
                { text: "<", value: "<" },
                { text: ">", value: ">" }
              ]}
              onChange={this.props.catCapacityFilter.handleChangeRange}
              value={
                this.props.filterValues.capacityFilter.cats.greaterOrLessThan
              }
            />
            <Form.Input
              type="number"
              label="Cat Capacity"
              name="capacity"
              onChange={this.props.catCapacityFilter.handleChangeRange}
              value={this.props.filterValues.capacityFilter.cats.capacity}
            />
          </Segment>
          <Button onClick={this.props.clearFilters}>Clear Filters</Button>
        </Form>
      </Modal>
    );
  }
}

export default HostFilter;
