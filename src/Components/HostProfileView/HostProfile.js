import React, { Component } from "react";
import { Image, Button, Card } from "semantic-ui-react";
import HostVacancies from "./HostVacancies";
import HostModalUpdate from "./HostModalUpdate";
import ChangeHostImageModal from "./ChangeHostImageModal";
import picComingSoon from "../../Images/picComingSoon.png";
import { colors } from "../../Constants/";


class HostProfile extends Component {
  handleApproveClick = () => {
    const hostData = { _id: this.props.host._id, approved: true };
    this.props.updateHost(hostData);
  };
  render() {
    const host = this.props.host;
    const hostProfilePic = host && host.photos[0];
    const shelter = this.props.shelter;
    const shelterProfilePic =
      shelter && shelter.photos
        ? shelter.photos[0]
        : "https://www.digitalcitizen.life/sites/default/files/styles/img_u_large/public/featured/2016-08/photo_gallery.jpg";

    return (
      <Card
        style={{
          margin: "20px",
          border: "1px solid",
          borderColor: "black",
          background: colors.backgroundC
        }}
      >
        <Image src={hostProfilePic || picComingSoon} size="medium" />
        <Card.Content>
          <Card.Header>{host && host.name}</Card.Header>
          <Card.Description>Address: {host && host.address}</Card.Description>
          <Card.Description>Phone Number: {host && host.phoneNumber}</Card.Description>
          <Card.Description>
            Capacity: Cats:{host && host.capacity && host.capacity.cats}, Dogs:
            {host && host.capacity && host.capacity.dogs}
          </Card.Description>
          {host && <HostVacancies host={host} />}
          {host && host.approved && (
            <Card.Content>
              <Image src={shelterProfilePic} avatar={true} size="massive" />
              Fostering for {shelter && shelter.name}
            </Card.Content>
          )}
          {this.props.canApproveNewHost && (
            <Button onClick={this.handleApproveClick} color="red">
              Approve {host.name}
            </Button>
          )}
          {this.props.canEdit && (
            <Card.Content extra>
              <HostModalUpdate host={host} />
              <ChangeHostImageModal id={host._id} />
            </Card.Content>
          )}
        </Card.Content>
      </Card>
    );
  }
}

export default HostProfile;
