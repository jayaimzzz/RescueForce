import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import EmailValidator from "email-validator";
import { login, logout } from "../../ActionCreators";

class Login extends Component {
  state = {
    email: "",
    validEmail: false,
    password: "",
    validPassword: false
  };

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value,
      validEmail: EmailValidator.validate(event.target.value)
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value,
      validPassword: event.target.value.length > 6
    });
  };

  handleLogin = event => {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const emailColor = this.state.validEmail
      ? { color: "green" }
      : { color: "red" };
    const passwordColor = this.state.validPassword
      ? { color: "green" }
      : { color: "red" };
    return (
      <Segment style={{ maxWidth: 500, margin: "auto", marginTop: "30vh" }}>
        <Form onSubmit={this.handleLogin}>
          <Form.Input
            type="email"
            icon="user"
            iconPosition="left"
            onChange={this.handleChangeEmail}
            placeholder="Enter Email Address"
            style={emailColor}
            required
            label="Email Address"
          />
          <Form.Input
            type="password"
            icon="lock"
            iconPosition="left"
            label="Password"
            style={passwordColor}
            onChange={this.handleChangePassword}
            required
            placeholder="Enter Password"
          />
          <button
            type="submit"
            disabled={
              this.props.auth_in_progress ||
              !(this.state.validEmail && this.state.validPassword)
            }
            style={{ padding: 10 }}
          >
            Login
          </button>
        </Form>
        {this.props.loginResult}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  auth_in_progress: state.auth.auth_in_progress,
  loginResult: state.auth.loginResult
});

const mapDispatchToProps = dispatch => {
  return {
    login: emailAndPassword => dispatch(login(emailAndPassword)),
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
