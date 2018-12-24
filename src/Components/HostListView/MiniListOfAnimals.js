import React, { Component } from "react";
import { connect } from "react-redux";

class MiniListOfAnimals extends Component {
    render() {
        return(
            <div>mini list of Animals</div>
        )
    }
}

const mapStateToProps = null;

const mapDisPatchToProps = null;

export default connect(mapStateToProps, mapDisPatchToProps)(MiniListOfAnimals)