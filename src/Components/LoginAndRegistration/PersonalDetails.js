import React, { Component } from "react";
import { Form, Button, Progress, Grid, Image } from "semantic-ui-react";
import dogCatPic from "../../Images/dog-cat01.png" 

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          
          <Grid.Column>
            <h1>  </h1>
              <Progress percent={33} color='teal' progress>
                Step Two
              </Progress>
            <Form color="blue" style={{ backgroundColor: "lightGrey" }}>
              <h2 className="ui centered">Home Infomation</h2>
              <Form.Group>
                <Form.Field>
                  <label>Address</label>
                  <input
                    placeholder="Address"
                    onChange={this.props.handleChange("address")}
                    value={values.address}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <label>Phone Number</label>
                  <input
                    placeholder="Phone Number"
                    onChange={this.props.handleChange("phoneNumber")}
                    value={values.phoneNumber}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <label>Number of Cats You Want to Foster</label>
                  <input
                    placeholder="Cat Capacity"
                    onChange={this.props.handleChange("capacityCat")}
                    value={values.capacityCat}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group>
                <Form.Field>
                  <label>Number of Dogs You Want to Foster</label>
                  <input
                    placeholder="Dog Capacity"
                    onChange={this.props.handleChange("capacityDog")}
                    value={values.capacityDog}
                  />
                </Form.Field>
              </Form.Group>
              <Button color="teal" onClick={this.back}>
                Back
              </Button>
              <Button color="grey" onClick={this.saveAndContinue}>
                Save And Continue{" "}
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column stretched>
            <Image src={dogCatPic} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PersonalDetails;
