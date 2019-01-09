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
              backgroundColor: "white",
              position: "fixed",
              height: "8%",
              fontSize: "20px",
              fontFamily: "fantasy"
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
                    width: "80%",
                    color: "black"
                  }}
                >
                  Top of Page
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-one"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionOne)}
                >
                  Scrolling Images
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-two"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionTwo)}
                >
                  Mission Statement
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-three"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionThree)}
                >
                  Animals to Adopt
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-four"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionFour)}
                >
                  Apply
                </a>
              </li>
              <li
                className="ui breadcome"
                style={{ width: "100%", color: "black" }}
              >
                <a
                  href="#section-five"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionFive)}
                >
                  Donate
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          id="section-one"
          style={{
            marginTop: "60px",
            height: "300px",
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionOne}
        >
          Scrolling Images
        </div>
        <div
          id="section-two"
          style={{
            height: "500px",
            backgroundColor: "#D8D8E4",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionTwo}
        >
          Mission Statement
        </div>
        <div
          id="section-three"
          style={{
            height: "500px",
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionThree}
        >
          Animals To Adopt
        </div>
        <div
          id="section-four"
          style={{
            height: "500px",
            backgroundColor: "#D8D8E4",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionFour}
        >
          Apply
        </div>
        <div
          id="section-five"
          style={{ height: "500px", backgroundColor: "white" }}
          ref={this.sectionFive}
        >
          Donate
        </div>
      </Fragment>
    );
  }
}

export { Nav };
