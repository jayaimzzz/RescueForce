import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Button, Card, Icon } from "semantic-ui-react";

class HostProfile extends Component {
  render() {
    // const styles = {
    //   container: {
    //     display: "inline-block",
    //     backgroundColor: "BurlyWood",
    //     height: 200,
    //     width: "40vw"
    //   }
    // };
    const host = this.props.host;
    const hostProfilePic = host.photos[0];
    const shelter = this.props.shelter;
    const shelterProfilePic = shelter.photos[0];
    return (
      <Card>
        <Image src={hostProfilePic} size="medium" />
        <Card.Content>
          <Card.Header>{host.name}</Card.Header>
          <Card.Description>Address: {host.address}</Card.Description>
          <Card.Description>Phone Number: {host.phoneNumber}</Card.Description>
          <Card.Description>Capacity: Cats:{host.capacity.cats}, Dogs:{host.capacity.dogs}</Card.Description>
          {host.approved && (
            <Card.Content>
              <Image src={shelterProfilePic} avatar={true} size="massive" />
              Fostering for {shelter.name}
            </Card.Content>
          )}
          <Card.Content extra>
          <Button onClick={()=>console.log('edit profile button clicked')}><Icon name='edit'/>Edit Profile</Button>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = (state, props) => {
  const host = state.hosts.find(host => host.id === props.hostId);
  const canEdit = state.loggedInUser.id === host.id
  const shelter = state.shelters.find(shelter => shelter.id === host.shelterId);
  return {
    host: host,
    shelter: shelter,
    canEdit: canEdit
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostProfile);
