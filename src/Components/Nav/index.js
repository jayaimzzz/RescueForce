import React, { Component, Fragment } from "react";


class Nav extends Component {
  render() {
    return (
      <Fragment>
        <div className="top">
          <nav
            className="site-navigation page-navigation"
            style={{
              width: "100%",
              backgroundColor: "#ebebeb",
              // position: "fixed",
              height: "8%"
            }}
          >
            <ul
              className="ui section"
              style={{ listStyleType: "none", display: "flex" }}
            >
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#top"
                  style={{
                    padding: "0.6em 10%",
                    width: "80%"
                  }}
                >
                  Home
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-one"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  Foster
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-two"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  Sign In
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-three"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  Donate
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-four"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  Apply
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-five"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  Donate
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="section-one" />
        <div className="section-two" />
        <div className="section-three" />
        <div className="section-four" />
        <div className="section-five" />
      </Fragment>
    );
  }
}

export { Nav };
