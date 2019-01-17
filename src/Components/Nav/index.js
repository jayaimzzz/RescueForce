import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { push } from "connected-react-router";
import { logout } from "../../ActionCreators";
import { colors } from "../../Constants/"

const linkStyle = {
  color: colors.textB,
  fontFamily: "sans-serif",
  fontSize: "2em"
};

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{
            height: 50,
            backgroundColor: colors.b,
            position: "relative"
          }}
        >
          <div
            style={{
              width: "80vw",
              height: "inherit",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Link style={linkStyle} to="/">
              Main
            </Link>
            <Link style={linkStyle} to="/cats">
              Cats
            </Link>
            <Link style={linkStyle} to="/dogs">Dogs</Link>
            {this.props.role === "shelter" && (
              <Fragment>
                <Link style={linkStyle} to="/admin">Admin</Link> <Link style={linkStyle} to="/hosts">Hosts</Link>
              </Fragment>
            )}
            {this.props.role === "host" && (
              <Link style={linkStyle} to={`/host/${this.props.user._id}`}>Home</Link>
            )}
          </div>
          {this.props.isLoggedIn ? (
            <Button
              primary
              style={{
                backgroundColor: colors.button,
                height: "inherit",
                width: 100,
                position: "absolute",
                top: 0,
                right: 0,
                color: "textB"
              }}
              onClick={() => this.props.logout()}
            >
              Logout
            </Button>
          ) : (
            <Button
              className="ui right floated primary button"
              style={{
                backgroundColor: colors.button,
                height: "inherit",
                width: 100,
                position: "absolute",
                top: 0,
                right: 0
              }}
              primary
              onClick={() => this.props.navToLogin()}
            >
              Login
            </Button>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.user ? Boolean(state.auth.user.token) : false,
  role: state.auth.user ? state.auth.user.type : "public",
  user: state.auth.user ? state.auth.user.data : null
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    navToLogin: () => dispatch(push("/login"))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
