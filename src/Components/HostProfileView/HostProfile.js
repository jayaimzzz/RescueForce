import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Button, Card, Icon } from "semantic-ui-react";
import HostVacancies from "./HostVacancies";

class HostProfile extends Component {
  render() {
    const host = this.props.host;
    const hostProfilePic = host.photos[0];
    const shelter = this.props.shelter
    const shelterProfilePic = shelter.photos[0];
    return (
      <Card>
        <Image src={hostProfilePic} size="medium" />
        <Card.Content>
          <Card.Header>{host.name}</Card.Header>
          <Card.Description>Address: {host.address}</Card.Description>
          <Card.Description>Phone Number: {host.phoneNumber}</Card.Description>
          <Card.Description>Capacity: Cats:{host.capacity.cats}, Dogs:{host.capacity.dogs}</Card.Description>
          <HostVacancies host={host}/>
          {host.approved && (
            <Card.Content>
              <Image src={shelterProfilePic} avatar={true} size="massive" />
              Fostering for {shelter.name}
            </Card.Content>
          )}
          {this.props.canEdit && (
          <Card.Content extra>
          <Button onClick={()=>console.log('edit profile button clicked')}><Icon name='edit'/>Edit Profile</Button>
          </Card.Content>
          )}
        </Card.Content>
      </Card>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   const host = state.hosts.find(host => host._id === props.hostId);
//   const canEdit = state.auth.user._id === host._id
//   return {
//     host: host,
//     canEdit: canEdit
//   };
// };

// const mapDispatchToProps = null;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HostProfile);

export default HostProfile
