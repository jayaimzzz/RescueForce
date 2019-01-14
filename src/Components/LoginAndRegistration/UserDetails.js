import React, { Component } from "react";
import { Form, Button, Progress, Grid, Image } from "semantic-ui-react";

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
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
              <h1 className="ui centered">Become a Foster Host!</h1>
              <Progress percent={0} color='teal' progress>
                Step One
              </Progress>
            <Form style={{ backgroundColor: "lightGrey" }}>
              <h2 className="ui centered">Personal Information</h2>
              {/* add image of an animal family in the background and center this */}
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
          </Grid.Column>
          <Grid.Column stretched>
            <Image src="https://cdn.pixabay.com/photo/2016/07/21/14/18/dog-1532627_640.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default UserDetails;
