import React, { Component } from "react";
import { Button, List, Progress, Grid, Image } from "semantic-ui-react";
import dogCatPic from "../../Images/dog-cat01.png"

class Confirmation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.props.registerHost();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, phoneNumber, address, capacityCat, capacityDog }
    } = this.props;

    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column stretched>
            <h2 className="ui centered">Confirm your Details</h2>
            <Progress percent={66} color ='teal' progress>
              <h2>Step Three - Confirm!</h2>
            </Progress>

            <p>
              Click to confirm if the following details have been correctly
              entered
            </p>
            <List color="blue" style={{ backgroundColor: "lightGrey" }}>
              <List.Item>
                <List.Icon name="users" />
                <List.Content>Name: {name}</List.Content>
              </List.Item>
              <br />

              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  Email: <a href="mailto:jack@semantic-ui.com">{email}</a>
                </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Icon name="phone" />
                <List.Content>Phone Number: {phoneNumber} </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Icon name="home" />
                <List.Content>
                  Address:
                  {address}
                </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Icon name="paw" />
                <List.Content>
                  {" "}
                  Cat Capacity:
                  {capacityCat}
                </List.Content>
              </List.Item>
              <br />
              <List.Item>
                <List.Icon name="paw" />
                <List.Content>
                  {" "}
                  Dog Capacity:
                  {capacityDog}
                </List.Content>
              </List.Item>
              <br />
            </List>

            <Button color="teal" onClick={this.back}>
                Back
              </Button>
              <Button color="grey" onClick={this.saveAndContinue}>
                Confirm{" "}
              </Button>
          </Grid.Column>
          <Grid.Column stretched>
            {/* <Image src="https://cdn.pixabay.com/photo/2016/04/12/19/32/abstract-1325156_640.png" /> */}
            <Image src={dogCatPic} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Confirmation;
