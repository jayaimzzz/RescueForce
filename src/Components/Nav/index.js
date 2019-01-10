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
              marginTop: "20px",
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
<<<<<<< HEAD
                  style={{ padding: "0.6em 10%", width: "80%" }}
=======
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
                  onClick={this.handlePageScroll(this.sectionOne)}
                >
                  <Icon className="paw icon">Scrolling</Icon>
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-two"
<<<<<<< HEAD
                  style={{ padding: "0.6em 10%", width: "80%" }}
=======
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
                  onClick={this.handlePageScroll(this.sectionTwo)}
                >
                  <Icon className="paw icon">Mission</Icon>
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-three"
<<<<<<< HEAD
                  style={{ padding: "0.6em 10%", width: "80%" }}
=======
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
                  onClick={this.handlePageScroll(this.sectionThree)}
                >
                  <Icon className="paw icon">Animals</Icon>
                </a>
              </li>
              <li className="ui breadcome" style={{ width: "100%" }}>
                <a
                  href="#section-four"
<<<<<<< HEAD
                  style={{ padding: "0.6em 10%", width: "80%" }}
=======
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
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
<<<<<<< HEAD
                  href="section-five"
                  style={{ padding: "0.6em 10%", width: "80%" }}
=======
                  href="#section-five"
                  style={{ padding: "0.6em 10%", width: "80%", color: "black" }}
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
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
            height: "400px",
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionOne}
        />
        <div
          id="section-two"
          style={{
<<<<<<< HEAD
            height: "500px",
            backgroundColor: "red",
            textAlign: "center"
          }}
          ref={this.sectionTwo}
        >
          James needs to write a mission statement and it needs to go here.
=======
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
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
        </div>
        <div
          id="section-three"
          style={{
<<<<<<< HEAD
            height: "500px",
            backgroundColor: "blue"
=======
            height: "400px",
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
          }}
          ref={this.sectionThree}
        >
          Animals To Adopt
        </div>
        <div
          id="section-four"
          style={{
<<<<<<< HEAD
            height: "500px",
            backgroundColor: "yellow"
=======
            height: "400px",
            backgroundColor: "#D8D8E4",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
          }}
          ref={this.sectionFour}
        >
          Apply
        </div>
        <div
          id="section-five"
<<<<<<< HEAD
          style={{
            height: "500px",
            backgroundColor: "green"
          }}
=======
          style={{ height: "400px", backgroundColor: "white" }}
>>>>>>> b47790ded41d809f6e00fd14d26bbd39a1acf664
          ref={this.sectionFive}
        >
          Donate
        </div>
      </Fragment>
    );
  }
}

export { Nav };
