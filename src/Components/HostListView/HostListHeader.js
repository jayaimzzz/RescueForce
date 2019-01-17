import React, { Component } from "react";
import {
  Image,
  Grid,
  Container,
  Segment,
  Label,
  Header
} from "semantic-ui-react";
import { colors } from "../../Constants"

class HostListHeader extends Component {
  render() {
    console.log(this.props.shelter);
    const shelter = this.props.shelter;
    return (
      <Segment style={{backgroundColor: colors.backgroundB}}>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={shelter.photos[0]} avatar size="small" />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Header as="h1">{shelter.name}'s list of foster homes</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default HostListHeader;
