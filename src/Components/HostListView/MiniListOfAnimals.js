import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
    Image,
    Label,
    Button,
    Card,
    Icon,
    CardContent,
    Segment
  } from "semantic-ui-react";

// class MiniListOfAnimals extends Component {
//     render() {
//         console.log(this.props.animals)
//         return(
//             <div>
//                 {this.props.animals.map(animal => {
//                     return(
//                         <div style={{overflowX:"scroll", whiteSpace: "nowrap",}}>
//                         <Image style ={{display:"inline"}} size="massive" avatar={true} src={animal.pictures[0]}/>
//                         </div>
//                 )
//                 })}
//             </div>
//         )
//     }
// }


const styles = {
    img: {
      display: "inline-block",
      borderRadius: "5px"
    },
    segment: {
      overflowX: "scroll",
      whiteSpace: "nowrap",
      borderRadius: "5px"
    }
  };
  
  class MiniListOfAnimals extends Component {
    render() {
      
      return (
        <Segment style={styles.segment}>
          {this.props.animals.map((animal, index) => (
            <Image
              size="tiny"
              as={Link}
              to={`/animal/${animal.id}`}
              circular
              spaced="right"
              src={animal.pictures[0]}
              key={`${this.props.animalId}imgNum${index}`}
            >

            </Image>
          ))}
        </Segment>
      );
    }
  }

const mapStateToProps = (state, props) => {
    return {
        animals: state.animals.filter(animal => animal.hostId === props.hostId)
    }
}

const mapDisPatchToProps = null;

export default connect(mapStateToProps, mapDisPatchToProps)(MiniListOfAnimals)