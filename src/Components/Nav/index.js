import React, { Component, Fragment } from "react";

class Nav extends Component {
  render() {
    return (
      <Fragment>
        <div className="top" />
        <div className="section-one" />
        <div className="section-two" />
        <div className="section-three" />
        <div className="section-four" />
        <div className="section-five" />
        <nav
          className="site-navigation page-navigation"
          style={{
            width: "100%",
            backgroundColor: "#ebebeb",
            position: "fixed",
            top: "10%",
            left: "0"
          }}
        >
          <ul
            className="ui header"
            style={{ listStyleType: "none", display: "flex" }}
          >
            <li style={{ width: "100%" }}>
              <a
                href="#top"
                style={{
                  padding: "0.6em 10%",
                  width: "80%"
                }}
              >
                Top
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="#section-one"
                style={{ padding: "0.6em 10%", width: "80%" }}
              >
                One
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="#section-two"
                style={{ padding: "0.6em 10%", width: "80%" }}
              >
                Two
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="#section-three"
                style={{ padding: "0.6em 10%", width: "80%" }}
              >
                Three
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="#section-four"
                style={{ padding: "0.6em 10%", width: "80%" }}
              >
                Four
              </a>
            </li>
            <li style={{ width: "100%" }}>
              <a
                href="#section-five"
                style={{ padding: "0.6em 10%", width: "80%" }}
              >
                Five
              </a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export { Nav };
