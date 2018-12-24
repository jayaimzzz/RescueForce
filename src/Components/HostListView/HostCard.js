import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Button, Card, Icon } from "semantic-ui-react";

// export const HostCard = () => (
//     <div style={{height: 60, backgroundColor: "cornsilk"}}>Foster Home Card</div>
// );

class HostCard extends Component {
    render() {
        return (
        <Card>
            Host Card
        </Card>
        
        )}
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect (mapStateToProps, mapDispatchToProps)(HostCard);