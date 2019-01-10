import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Button, Card, Icon, CardContent } from "semantic-ui-react";
import ModalUpdate from './ModalUpdate'
import moment from 'moment'

class AnimalProfile extends Component {

  //  yesOrNo (bool) {
  //   return bool ? "is" : "is not"
  // }

  render() {
    const animal = this.props.animal;
    // const shelter = this.props.shelter;
    // const host = this.props.host;
    // const ButtonExampleShorthand = () => <Button content='Click Here' />

    return (

      <Card>
         <Card.Content>
           <Card.Header>{animal.name}</Card.Header>
               <Card.Description>Species: {animal.species}</Card.Description>
               <Card.Description>Breed: {animal.breed}</Card.Description>
               <Card.Description>DOB: {animal.dob}</Card.Description>
               <Card.Description>Sex: {animal.sex}</Card.Description>
               <Card.Description>About: {animal.about}</Card.Description>
               <Card.Description>Host Id: {animal.hostId ? animal.hostId._id : ''}</Card.Description>
               <Card.Description>Status: {animal.status}</Card.Description>
               {/* <Card.Description>{animal.name} {this.yesOrNo(animal.animalFriendly)} animal-friendly. </Card.Description> */}
               <Card.Description>{animal.name} {animal.animalFriendly ? "is" : "is not"} animal-friendly. </Card.Description>
               <Card.Description>{animal.name} {animal.peopleFriendly ? "is" : "is not"} people-friendly.  </Card.Description>
               <Card.Description>{animal.name} {animal.pregnant ? "is" : "is not"} pregnant. </Card.Description>
               <Card.Description>{animal.name} {animal.fixed ? "is" : "is not"} fixed. </Card.Description>
               <Card.Description>{animal.name} {animal.specialDiet ? "does" : "does not"} have a special diet. </Card.Description>
               <Card.Description>{animal.name} {animal.specialNeeds ? "does" : "does not"} have special needs. </Card.Description>
         </Card.Content>
            <Card.Content extra>
                {this.props.canUpdate && (
                  <ModalUpdate animal={animal}></ModalUpdate>
                )} 
                {this.props.canClaim && (
                  <Button color="red">Foster {this.props.animal.name}</Button>
                )} 

            </Card.Content>
      
      </Card>
      
    );
  }
}

const mapStateToProps = (state, props) => {
  const loggedInUser = state.auth.user;
  const animal = state.animals.find(animal => animal._id === props.animalId)
  console.log(animal)
  console.log(loggedInUser.data._id)
  let canUpdate = false;
  let canClaim = false;
  if(loggedInUser.type === "host"){
    if(animal.hostId && loggedInUser.data._id === animal.hostId._id){
      canUpdate = true;
    }
    if(animal.status === "need-foster"){
      canClaim = true;
    }
  }
  if(loggedInUser.type === "shelter"){
    if(animal.shelterId && animal.shelterId._id === animal.shelterId._id){
      canUpdate = true;
    }
  }
  return {
    animal: animal,
    canUpdate: canUpdate,
    canClaim: canClaim
  };
};

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalProfile);
