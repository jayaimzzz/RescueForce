import React, { Component } from "react";
import { Form, Grid, Segment } from "semantic-ui-react";
import { connect } from 'react-redux';
import { login } from '../../ActionCreators';

import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleCheckUserName = event => {
    this.setState({
      email: event.target.value
    });
  };

  handleCheckPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleLogin = event => {
    console.log("Login Button Clicked");
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    return (
      <Grid>
        <Form method="get" className="ui large form">
          <Segment>
            <div className="field">
              <input
                // style={inputStyle}
                type="text"
                onChange={this.handleCheckUserName}
                required
                placeholder="Enter Username"
              />
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon" />
                <input
                  //   style={inputStyle}
                  type="password"
                  onChange={this.handleCheckPassword}
                  required
                  placeholder="Enter Password"
                />
              </div>
              <button>
                <div onClick={this.handleLogin}>Login</div>
              </button>
            </div>
          </Segment>
        </Form>
        <Link to="/">Home</Link>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: emailAndPassword => dispatch(login(emailAndPassword))
  };
};

export default connect(null, mapDispatchToProps)(Login);
