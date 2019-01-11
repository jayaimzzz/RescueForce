import React, { Component, Fragment } from "react";
import HeaderImageScroll from "../PublicView/HeaderImageScroll";
import { timingSafeEqual } from "crypto";
import { Icon, Header } from "semantic-ui-react";
import MissionStatement from "../PublicView/MissionStatement";

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
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  };

  render() {
    return (
      <Fragment>
        <div className="site navigation page navigation">
          <nav
            className="top"
            style={{
              marginTop: "20px",
              width: "100%",
              margin: "20px",
              paddingBottom: "20px",
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
                  <Icon className="paw icon">Home</Icon>
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-one"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionOne)}
                >
                  <Icon className="paw icon">Scrolling</Icon>
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-two"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionTwo)}
                >
                  <Icon className="paw icon">Mission</Icon>
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-three"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionThree)}
                >
                  <Icon className="paw icon">Animals</Icon>
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-four"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
                  onClick={this.handlePageScroll(this.sectionFour)}
                >
                  <Icon className="paw icon">Apply</Icon>
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
                  <Icon className="paw icon">Donations</Icon>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          id="section-one"
          style={{
            paddingTop: "100px",
            height: "300px",
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionOne}
        >
          <HeaderImageScroll />
        </div>
        <div
          id="section-two"
          style={{
            // height: "400px",
            backgroundColor: "#D8D8E4",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionTwo}
        >
          <MissionStatement/>
        </div>
        <div
          id="section-three"
          style={{
            height: "400px",
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionThree}
        >
          <p
            style={{
              fontFamily: "cursive",
              fontSize: "50px",
              textAlign: "center",
              margin: "30px",
              paddingTop: "100px"
            }}
          >
            adopt a furry friend
          </p>
        </div>
        <div
          id="section-four"
          style={{
            height: "400px",
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
          style={{ height: "400px", backgroundColor: "white" }}
          ref={this.sectionFive}
        >
          Donate
        </div>
      </Fragment>
    );
  }
}

export { Nav };
