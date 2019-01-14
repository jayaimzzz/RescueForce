import React, { Component } from "react";
import { Form, Button, Progress, Grid, Image } from "semantic-ui-react";

class Success extends Component {
  render() {
    const { values } = this.props;
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <h1> </h1>
            <Progress percent={100} color="teal" progress>
              <h2>You're Finished!</h2>
            </Progress>
            <Form color="blue" style={{ backgroundColor: "lightGrey" }}>
              <h1> </h1>
              <h2 className="ui centered">Information Successfully Saved</h2>
              <h2 className="ui centered">
                Welcome to the RescueForce Family!
              </h2>
            </Form>
          </Grid.Column>
          <Grid.Column stretched>
            <Image src="https://cdn.pixabay.com/photo/2016/04/12/19/32/abstract-1325156_640.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Success;
