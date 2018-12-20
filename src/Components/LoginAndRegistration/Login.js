import React, { Component } from "react";
import { Form, Grid, Segment } from "semantic-ui-react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleCheckUserName = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleCheckPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleLogin = event => {
    this.props.login({
      username: this.state.username,
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
      </Grid>
    );
  }
}

export default Login;
