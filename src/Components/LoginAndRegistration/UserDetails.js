import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class UserDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    if (this.props.values.passwordsMatch && this.props.values.emailsMatch) {
      this.props.nextStep();
    }
  };

  render() {
    const { values } = this.props;
    return (
      <Form style={{ backgroundColor: "lightGrey" }}>
        <h1 className="ui centered">Enter User Details</h1>
        <Form.Group>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="name"
              onChange={this.props.handleChange("name")}
              value={values.name}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              onChange={this.props.handleChange("email")}
              value={values.email}
            />
          </Form.Field>

          <Form.Field>
            <label>Confirm Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              onChange={this.props.handleChange("confirmEmail")}
              onBlur={this.props.handleCheckEmail}
            />
          </Form.Field>
        </Form.Group>

        <Form.Group>
          <Form.Input
            type="password"
            label="Password"
            onChange={this.props.handleChange("password")}
            value={values.password}
          />

          <Form.Input
            type="password"
            label=" Confirm Password"
            onChange={this.props.handleChange("confirmPassword")}
            onBlur={this.props.handleCheckPassword}
          />
        </Form.Group>
        <Button color="grey" onClick={this.saveAndContinue}>
          Save And Continue{" "}
        </Button>
      </Form>
    );
  }
}

export default UserDetails;
