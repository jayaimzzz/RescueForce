import React, { Component, Fragment, Nav } from "react";
import { Link } from "react-router-dom";

class AnimalListNavBar extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Nav
            className="site navigation"
            style={{
              width: "100%",
              backgroundColor: "pink",
              position: "fixed",
              height: "8%"
            }}
          >
            <ul
              className="ui section"
              style={{ listStyleType: "none", display: "flex" }}
            >
              <li className="ui breadcome" style={{ width: "100%" }}>
                <Link to="/" style={{ padding: "0.6em 10%", width: "80%" }}>
                  Main Page
                </Link>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <Link
                  to="/ShelterAdminPortal"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  ShelterAdminPortal
                </Link>
              </li>
              <li className="ui section" style={{ width: "100%" }}>
                <Link
                  to="/HostProfileView"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  HostProfileView
                </Link>
              </li>
            </ul>
          </Nav>
        </Fragment>
      </div>
    );
  }
}

export { AnimalListNavBar };
