import React, { Component, Fragment } from "react";
import HeaderImageScroll from "../PublicView/HeaderImageScroll";
import { timingSafeEqual } from "crypto";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.sectionOne = React.createRef();
    this.sectionTwo = React.createRef();
    this.sectionThree = React.createRef();
    this.sectionFour = React.createRef();
    this.sectionFive = React.createRef();
  }
  handlePageScroll = ref => event => {
    event.preventDefault();
    // ref.current.scrollIntoView(true, { behavior: "smooth" });
    // ref.current.scrollTo(0, 0);
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };
  // state = {
  //   color: "pink",
  //   backgroundColor: "blue"
  // };

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
                  style={{ padding: "0.6em 10%", width: "80%" }}
                  onClick={this.handlePageScroll(this.sectionOne)}
                >
                  Scrolling Images
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  style={{ padding: "0.6em 10%", width: "80%" }}
                  onClick={this.handlePageScroll(this.sectionTwo)}
                >
                  Mission Statement
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  style={{ padding: "0.6em 10%", width: "80%" }}
                  onClick={this.handlePageScroll(this.sectionThree)}
                >
                  Services
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  style={{ padding: "0.6em 10%", width: "80%" }}
                  onClick={this.handlePageScroll(this.sectionFour)}
                >
                  Apply
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  style={{ padding: "0.6em 10%", width: "80%" }}
                  onClick={this.handlePageScroll(this.sectionFive)}
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

            height: "800px"
          }}
          ref={this.sectionOne}
        >
          Header Scroll
        </div>
        <div id="section-two" style={{ height: "800px" }} ref={this.sectionTwo}>
          Mission Statment
        </div>
        <div id="section-three" ref={this.sectionThree}>
          Animal List Link
        </div>
        <div id="section-four" ref={this.sectionFour}>
          Section Four
        </div>
        <div id="section-five" ref={this.sectionFive} />
      </Fragment>
    );
  }
}

export { Nav };
