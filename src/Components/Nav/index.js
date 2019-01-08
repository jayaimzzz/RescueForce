import React, { Component, Fragment } from "react";
import HeaderImageScroll from "../PublicView/HeaderImageScroll";
import { timingSafeEqual } from "crypto";

class Nav extends Component {
  state = {
    color: "pink",
    backgroundColor: "blue"
  };

  // listenScrollEvent = e => {
  //   if (window.scrollY > 400) {
  //     this.setState({ color: "black" });
  //   } else {
  //     this.setState({ color: "yellow" });
  //   }
  // };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.listenScrollEvent);
  // }
  render() {
    return (
      <Fragment>
        <div className="site navigation page navigation">
          <nav
            className="top"
            style={{
              width: "100%",
              backgroundColor: "#ebebeb",
              position: "fixed",
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
                  Scrolling Images
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-two"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  Mission Statement
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-three"
                  style={{ padding: "0.6em 10%", width: "80%" }}
                >
                  Services
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
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          id="section-one"
          style={{
            marginTop: "40px",
            color: this.state.color,
            height: "800px"
          }}
        >
          Header Scroll
        </div>
        <div
          id="section-two"
          style={{ color: this.state.backgroundColor, height: "800px" }}
        >
          Mission Statment
        </div>
        <div id="section-three">Animal List Link</div>
        <div id="section-four">Section Four</div>
        <div id="section-five" />
      </Fragment>
    );
  }
}

export { Nav };
