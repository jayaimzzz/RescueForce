import React, { Component, Fragment } from "react";
import HeaderImageScroll from "../PublicView/HeaderImageScroll";
import { timingSafeEqual } from "crypto";
import { Icon } from "semantic-ui-react";

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
                />
                <Icon className="paw icon">Scrolling</Icon>
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
            marginTop: "60px",
            height: "400px",
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
            height: "400px",
            backgroundColor: "#D8D8E4",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionTwo}
        >
          <h3
            style={{
              paddingTop: "30px",
              textAlign: "center",
              fontFamily: "fantasy",
              fontStyle: "bold",
              fontSize: "40px"
            }}
          >
            Rescue Force
          </h3>
          <p
            style={{
              padding: "20px",
              paddingTop: "30px",
              textAlign: "center",
              fontSize: "23px",
              fontFamily: "fantasy",
              fontStyle: "italic"
            }}
          >
            Second Chance Animal Services is a nationally recognized
            organization that provides innovative programs and services to help
            animals. Second Chance Animal Services has been helping animals
            since 1999. We are a no-kill, non-profit charitable 501c3
            organization. We help over 34,000 pets through adoption, low cost
            spay/neuter, high quality veterinary care for all, subsidized rates
            for those that qualify, community outreach, educational programs,
            training, a pet food pantry, and other services.
          </p>
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
          Animals To Adopt
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
