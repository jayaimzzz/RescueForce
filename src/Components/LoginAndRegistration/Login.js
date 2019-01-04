import React, { Component } from "react";
import { Form, Grid, Segment, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { login } from "../../ActionCreators";

import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleLogin = event => {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return (
      <Segment>
        <Form onSubmit={this.handleLogin}>
          <Form.Field>
            <label>email address</label>
            <input
              type="text"
              onChange={this.handleChangeEmail}
              required
              placeholder="Enter Email Address"
            />
          </Form.Field>
          <Form.Field>
            <label>password</label>
            <input
              type="password"
              onChange={this.handleChangePassword}
              required
              placeholder="Enter Password"
            />
          </Form.Field>
          <button type="submit">Login</button>
        </Form>
        <Link to="/">Home</Link>
      </Segment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: emailAndPassword => dispatch(login(emailAndPassword))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
