import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Image, Container, Card } from "semantic-ui-react";

class HostProfile extends Component {
  render() {
    const styles = {
      container: {
        display: "inline-block",
        backgroundColor: "BurlyWood",
        height: 200,
        width: "40vw"
      }
    };
    const host = this.props.host;
    const hostProfilePic = host.photos[0];
    const shelter = this.props.shelter;
    const shelterProfilePic = shelter.photos[0];
    return (
      <Card>
        <Image src={hostProfilePic} size="medium" />
        <Card.Content>
          <Card.Header>{host.name}</Card.Header>
          
          {host.approved && (
            <Card.Description>
              <Image src={shelterProfilePic} avatar="true" size="massive" />
              Fostering for {shelter.name}
            </Card.Description>
          )}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  const host = state.hosts.find(host => host.id === props.hostId);
  const shelter = state.shelters.find(shelter => shelter.id === host.shelterId);
  return {
    host: host,
    shelter: shelter
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostProfile);
