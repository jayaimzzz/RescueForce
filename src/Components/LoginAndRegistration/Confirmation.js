import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";

class Confirmation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, email, phoneNumber, address, capacityCat, capacityDog }
    //   values: { firstName, lastName, email, age, country, city }
    } = this.props;
    // const { values } = this.props

    return (
      <div>
        <h1 className="ui centered">Confirm your Details</h1>
        <p>
          Click to Confirm if the following details have been correctly entered
        </p>
        <List>

          <List.Item>
            <List.Icon name="users" />
            <List.Content>Name: {name}</List.Content>
          </List.Item>

          {/* <List.Item>
            <List.Icon name="users" />
            <List.Content>Last Name: {lastName}</List.Content>
          </List.Item> */}

          <List.Item>
            <List.Icon name="mail" />
            <List.Content>
             Email: <a href="mailto:jack@semantic-ui.com">{email}</a>
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="phone" />
            <List.Content>Phone Number: {phoneNumber} </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="home" />
            <List.Content>Address:
              {address}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="paw" />
            <List.Content> Cat Capacity:
              {capacityCat}
            </List.Content>
          </List.Item>

          <List.Item>
            <List.Icon name="paw" />
            <List.Content> Dog Capacity:
              {capacityDog}
            </List.Content>
          </List.Item>

        </List>

        <Button onClick={this.back}>Back</Button>
        <Button color='grey' onClick={this.saveAndContinue}>Confirm</Button>
      </div>
    );
  }
}

export default Confirmation;
