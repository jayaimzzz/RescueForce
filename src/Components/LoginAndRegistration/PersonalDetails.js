import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="blue" style={{ backgroundColor: "lightGrey" }}>
        <h1 className="ui centered">Pet Foster Infomation</h1>
        <Form.Group>
          <Form.Field>
            <label>Address</label>
            <input
              placeholder="Address"
              onChange={this.props.handleChange("address")}
              value={values.address}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label>Phone Number</label>
            <input
              placeholder="Phone Number"
              onChange={this.props.handleChange("phoneNumber")}
              value={values.phoneNumber}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label>Number of Cats You Want to Foster</label>
            <input
              placeholder="Cat Capacity"
              onChange={this.props.handleChange("capacityCat")}
              value={values.capacityCat}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label>Number of Dogs You Want to Foster</label>
            <input
              placeholder="Dog Capacity"
              onChange={this.props.handleChange("capacityDog")}
              value={values.capacityDog}
            />
          </Form.Field>
        </Form.Group>
        <Button color="darkGrey" onClick={this.back}>
          Back
        </Button>
        <Button color="grey" onClick={this.saveAndContinue}>
          Save And Continue{" "}
        </Button>
      </Form>
    );
  }
}

export default PersonalDetails;
