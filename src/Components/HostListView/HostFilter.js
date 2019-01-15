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
        open={this.state.open}
        onClose={this.toggleOpen}
      >
        <Header textAlign="center" verticalalign="middle" as="h1">
          Filter Hosts
        </Header>
        <Form size="large">
          <Input name="name" />
          <Input name="email" />
          <Segment>
            <Header
              style={{ width: "100%", margin: "auto", textAlign: "center" }}
            >
              Dog Capacity
            </Header>
            <Form.Select
              name="greaterOrLessThan"
              label="< / >"
              options={[{text: "Show All", value: "Show All" }, { text: "<", value: "<" }, { text: ">", value: ">" }]}
              onChange={this.props.filters.handleChangeRange}
              value={this.props.dogCapacityFilter.greaterOrLessThan}
            />
            <Form.Input
              type="number"
              label="Dog Capacity"
              name="capacity"
              onChange={this.props.filters.handleChangeRange}
              value={this.props.dogCapacityFilter.capacity}
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
              options={[{text: "Show All", value: "Show All" }, { text: "<", value: "<" }, { text: ">", value: ">" }]}
              onChange={this.props.filters.handleChangeRange}
              value={this.props.catCapacityFilter.greaterOrLessThan}
            />
            <Form.Input
              type="number"
              label="Cat Capacity"
              name="capacity"
              onChange={this.props.filters.handleChangeRange}
              value={this.props.catCapacityFilter.capacity}
            />
          </Segment>
        </Form>
      </Modal>
    );
  }
}

export default HostFilter;
