import React, { Component, Fragment } from "react";
import HeaderImageScroll from "../PublicView/HeaderImageScroll";
import { timingSafeEqual } from "crypto";
import { Icon, Header, List, Grid } from "semantic-ui-react";
import MissionStatement from "../PublicView/MissionStatement";
import AnimalList from "../AnimalList";
import AnimalCard from "../AnimalList";
import { ADOPTABLE } from "../../Constants/index";
import { Link } from "react-router-dom";

class FrontPageNav extends Component {
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
    const animal = this.props.animal;
    return (
      <Fragment>
        <div className="site navigation page navigation">
          <nav
            className="top"
            style={{
              marginTop: "20px",
              width: "100%",
              margin: "20px",
              marginLeft:'10px',
              paddingBottom: "20px",
              width: "100%",
              // backgroundColor: "white",
              backgroundColor: "#77E8E8",

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
                  <Icon className="paw icon">Register</Icon>
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
            margin: "0 0 50px 0",
            height: "300px",
            backgroundColor: "white",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderTopColor: "black",
            borderRadius: "2px"
          }}
          ref={this.sectionOne}
        >
          <HeaderImageScroll />
        </div>
        <div
          id="section-two"
          style={{
            backgroundColor: "#D8D8E4",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionTwo}
        >
          <MissionStatement />
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
          <p
            style={{
              fontFamily: "cursive",
              fontSize: "35px",
              textAlign: "left",
              margin: "10px"
            }}
          >
            Adopt a furry friend
          </p>
        </div>
        {/* {animal.status===ADOPTABLE} */}
        {/* <AnimalCard animals={this.props.animals} filter={{ status: ADOPTABLE }}/> */}
        {/* <AnimalList animals={this.props.animals} filter={{ status: ADOPTABLE }}/> */}
        {/* The line above isn't working because of the 'filter' (see animalList - animalList/index.  In addition, trying to figure out how to put these in a grid.) */}
        <div
          id="section-four"
          style={{
            height: "600px",
            backgroundColor: "#D8D8E4",
            borderBottomColor: "black",
            borderBottom: "3px solid",
            borderRadius: "2px"
          }}
          ref={this.sectionFour}
        >
          <Grid
            divided="vertically"
            style={{
              padding: "20px",
              textAlign: "left",
              fontSize: "20px",
              fontFamily: "tahoma",
              marginLeft: "20px",
              marginRight: "40px",
              marginTop: "1px"
            }}
          >
            <Grid.Row>
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "35px",
                  textAlign: "center",
                  marginTop: "1px",
                  margin: "10px"
                }}
              >
                Register to be a Foster Host
              </p>
              <p style={{ fontFamily: "tahoma", fontSize: "19px" }}>
                Foster parents provide temporary care for cats, kittens, dogs
                and puppies in their own homes. The most common reasons cats and
                dogs need foster care is:
                <li>
                  They are too young to be spayed or neutered and adopted out
                  into permanent homes. When kittens and puppies are eight weeks
                  old and weigh at least two pounds, they can be spayed or
                  neutered and made available for adoption.
                </li>
                <li>
                  They are nursing a litter of kittens or puppies. Although the
                  shelter is a safe environment, it is not the best for raising
                  babies.
                </li>
                <li>They are being treated for injuries or illnesses.</li>
                <br />
                Some animals need as little as two weeks of care, while others
                may need care for up to three months.
                <br />
                <br />
                With your help, we can help countless animals receive special
                care before getting a second chance at life. More than 2,000
                animals who come to AHS each year need foster care before they
                are ready to find new homes, and this need continues to
                increase. The food, medication, kennels, toys, and other basic
                supplies you will need will be provided to you, along with
                training and care instructions. Vet techs and behaviorists can
                also offer their help if needed. Fostering is an immensely
                rewarding experience, and it changes animals’ lives in a very
                direct way. Your act of kindness is repaid in rewards that are
                beyond words.
              </p>
            </Grid.Row>
            <Grid.Row>
              <Link
                style={{ fontSize: "20px", fontFamily: "tahoma", color:'77E8E8', textDecorationLine:'under' }}
                to="/register"
              >
                Click Here to Register
              </Link>{" "}
            </Grid.Row>
          </Grid>
        </div>

        <div
          id="section-five"
          style={{ height: "500px", backgroundColor: "white" }}
          ref={this.sectionFive}
        >
          <Grid
            divided="vertically"
            style={{
              padding: "20px",
              textAlign: "left",
              fontSize: "20px",
              fontFamily: "tahoma",
              marginLeft: "20px",
              marginRight: "40px",
              marginTop: "1px"
            }}
          >
            <Grid.Row>
              <p
                style={{
                  fontFamily: "cursive",
                  fontSize: "35px",
                  textAlign: "center",
                  marginTop: "1px",
                  margin: "10px"
                }}
              >
                Donate
              </p>
              <p style={{ fontFamily: "tahoma", fontSize: "19px" }}>
                Pet owners understand the cost associated with caring for their
                pet or pets. Food, vaccinations, flea control, toys, beds and
                medical assistance when needed – it all adds up far too quickly
                sometimes. Shelters deal with financial challenges every day.
                Regardless of whether our economy is up or down, abandoned and
                lost pets who have found their way to any shelter need the
                continued generosity of others for food, shelter and medical
                care. “No kill” shelters are located in most states, and costs
                can be staggering. Fortunately, you can help!
                <br />
                <br />
                Whether you chose to help out by making a financial
                contribution, volunteering your time at a shelter, or donating
                items on a shelter's 'wish list, you can find links to those
                options below.
              </p>
            </Grid.Row>
            <Grid.Row>
              <List style={{ color: "77E8E8", margin: "10px" }}>
                <List.Content style={{ color: "77E8E8" }}>
                  <a href="https://facespayneuter.org/donate/">
                    Face Low Cost Animal Clinic Donation Page
                  </a>
                </List.Content>
                <List.Content>
                  <a href="https://indyhumane.org/get_involved/donate/">
                    Indy Humane Animal Shelter Donation Page
                  </a>
                </List.Content>
                <List.Content>
                  <a href="https://facespayneuter.org/get-involved/ways-help/wish-list/">
                    Face Low Cost Animal Clinic Shelter Wish List
                  </a>
                </List.Content>
                <List.Content>
                  <a href="https://indyhumane.org/blog/news/wishlist/">
                    Indy Humane Animal Shelter Wish List
                  </a>
                </List.Content>
              </List>
            </Grid.Row>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export { FrontPageNav };