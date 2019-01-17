import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiniListOfAnimals from "./AnimalImgScroll";
import HostVacancies from "../HostProfileView/HostVacancies";
import {
  Image,
  Grid,
  Container,
  Segment,
  Label,
  Header
} from "semantic-ui-react";
import picComingSoon from "../../Images/picComingSoon.png"

class HostCard extends Component {
  render() {
    const host = this.props.host;
    const hostProfilePic = host.photos && host.photos[0] || picComingSoon;
    return (
      <Segment>
        <Grid>
          <Grid.Column width={2}>
            {host.approved && (
              <Label ribbon color="green">
                Approved
              </Label>
            )}
            {!host.approved && (
              <Label ribbon color="red">
                Pending
              </Label>
            )}
            <Image
              as={Link}
              to={"/host/" + host._id}
              floated="left"
              size="tiny"
              src={hostProfilePic}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Container>
              <Header as={Link} to={"/host/" + host._id}>
                {host.name}
              </Header>
              <div>{host.address}</div>
            </Container>
          </Grid.Column>
          <Grid.Column width={3}>
            <HostVacancies host={host} />
          </Grid.Column>
          <Grid.Column width={7}>
            <MiniListOfAnimals hostId={host._id} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostCard);
