import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UpdateHostInformation extends Component {

  render() {
    const { values } = this.props;
    return (
      <Form>
        <h1 className="ui centered">Update Host Information</h1>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={values.email}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            placeholder="City"
            onChange={this.props.handleChange("city")}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <label>Country</label>
          <input
            placeholder="Country"
            onChange={this.props.handleChange("country")}
            defaultValue={values.country}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder="Phone Number"
            onChange={this.props.handleChange("phoneNumber")}
            defaultValue={values.phoneNumber}
          />
        </Form.Field>
        <Form.Field>
          <label>Capacity For Dogs</label>
          <input
            placeholder="How Many Dogs?"
            onChange={this.props.handleChange("capacity.dogs")}
            defaultValue={values.capacity.dogs}
          />
        </Form.Field>
        <Form.Field>
          <label>Capacity For Cats</label>
          <input
            placeholder="How Many Cats"
            onChange={this.props.handleChange("capacity.cats")}
            defaultValue={values.capacity.cats}
          />
        </Form.Field>
        <Form.Field>
          <label>Fostering For</label>
          <input
            placeholder="Fostering For"
            onChange={this.props.handleChange("shelter.name")}
            defaultValue={values.shelter.name}
          />
        </Form.Field>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default UpdateHostInformation;