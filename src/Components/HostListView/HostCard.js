import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MiniListOfAnimals from "./MiniListOfAnimals";
import {
  Image,
  Button,
  Card,
  Grid,
  Icon,
  CardContent,
  Segment
} from "semantic-ui-react";

// export const HostCard = () => (
//     <div style={{height: 60, backgroundColor: "cornsilk"}}>Foster Home Card</div>
// );

class HostCard extends Component {
  render() {
    const styles = {
      imageContainer: {
        display: "inline",
        backgroundColor: "pink",
        margin: "50px"
      }
    };
    const host = this.props.host;
    const hostProfilePic = host.photos[0];
    console.log(this.props.animals);
    return (
      <Segment>
        <Grid columns={3}>
          <Grid.Column width={3}>
            <Image
              as={Link}
              to={"/host/" + host.id}
              floated="left"
              size="tiny"
              src={hostProfilePic}
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <Card.Content>{host.name}</Card.Content>
          </Grid.Column>
          <Grid.Column width={10}>
            <MiniListOfAnimals hostId={host.id} />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   return {
//     animals: state.animals.filter(animal => (animal.hostId = props.host.id))
//   };
// };
const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostCard);
