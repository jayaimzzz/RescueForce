import React, { Component } from "react";
import { connect } from "react-redux";
import { SHELTER } from "../../Constants"
import { Image, Segment } from "semantic-ui-react";
import ImageEdit from "./ImageEdit";
import { colors } from "../../Constants/"

const styles = {
  img: {
    display: "inline-block",
    borderRadius: "5px",
    transition: "transform .2s"
  },
  segment: {
    overflowX: "scroll",
    whiteSpace: "nowrap",
    borderRadius: "5px"
  }
};

class ImageScroll extends Component {
  render() {
    const images = this.props.images;
    return (
      <Segment style={{backgroundColor:colors.backgroundC}}>
        <div className="ui segment" style={styles.segment}>
          {images && images.map((image, index) => (
            <Image
              style={styles.img}
              size="medium"
              bordered
              src={image}
              key={`${this.props.animalId}imgNum${index}`}
            />
          ))}
        </div>
        {this.props.canUpdate && (
          <ImageEdit animalId={this.props.animalId} />
        )}
      </Segment>
    );
  }
}

const mapStateToProps = (state, props) => {
  const animal = state.animals.find(animal => animal._id === props.animalId)
  return {
    images: animal && animal.photos,
    canUpdate:
      state.auth.user.type === SHELTER ||
      state.auth.user.data._id === (animal && animal.hostId && animal.hostId._id)
  };
};

export default connect(mapStateToProps)(ImageScroll);
