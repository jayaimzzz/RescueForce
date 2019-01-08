import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Container, Header, Grid, Card, Image } from "semantic-ui-react";
import AnimalList from "../AnimalList";

class HostHomepage extends Component {
  render() {
    console.log(this.props.loggedInHost);
    const loggedInHost = this.props.loggedInHost;
    return (
      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
          <Card>

            <Header as="h5">Welcome {loggedInHost.name}!</Header>
            <Image src={loggedInHost.photos[0]} />
          </Card>
          </Grid.Column>
          <Container>
            <Header as="h3">Animals needing a foster home</Header>
            <AnimalList filter={{ status: "need-foster" }} />
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    loggedInHost: state.auth.user.data
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostHomepage);
