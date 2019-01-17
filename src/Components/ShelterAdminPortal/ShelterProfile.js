import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Card } from "semantic-ui-react";
import ModalUpdateShelter from "./ModalUpdateShelter";
import ChangeShelterImageModal from "./ChangeShelterImageModal";

class ShelterProfile extends Component {
  render() {
    const shelter = this.props.shelter;
    return (
      <Card style={{ margin: "auto", width: "40vw" }}>
        <Image src={shelter.photos && shelter.photos[0]} />
        <Card.Content>
          <Card.Header>{shelter.name}</Card.Header>
          <Card.Description>Address: {shelter.address}</Card.Description>
          <Card.Description>
            Phone Number: {shelter.phoneNumber}
          </Card.Description>
          <Card.Description>Email: {shelter.email}</Card.Description>
          <Card.Description>
            Capacity: Cats:{shelter.capacity && shelter.capacity.cats}, Dogs:
            {shelter.capacity && shelter.capacity.dogs}
          </Card.Description>

          {this.props.canEdit && (
            <Card.Content extra>
              <ModalUpdateShelter />
              <ChangeShelterImageModal id={shelter._id}/>
            </Card.Content>
          )}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  shelter: state.shelters.find(
    shelter => shelter._id === state.auth.user.data._id
  ),
  canEdit: true
});

export default connect(mapStateToProps)(ShelterProfile);
