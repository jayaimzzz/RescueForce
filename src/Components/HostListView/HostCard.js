import React, { Component } from "react";
import { connect } from "react-redux";
import MiniListOfAnimals from "./MiniListOfAnimals"
import {
  Image,
  Button,
  Card,
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
          imageContainer:{
              display: "inline",
              backgroundColor: "pink",
              margin: "50px"
          }
      }
    const host = this.props.host;
    const hostProfilePic = host.photos[0];
    console.log(this.props.animals);
    return (
        <Card raised={true} fluid={true}>
          <Card.Content>
            <Image floated="left" size="tiny" src={hostProfilePic} />
            <Card.Header>{host.name}</Card.Header>
            <div className={styles.imageContainer}>
                {this.props.animals.map(animal => <MiniListOfAnimals hostId={host.id}/>)}
            </div>
          </Card.Content>
        </Card>
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
