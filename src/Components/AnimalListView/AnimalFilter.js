import React from "react";
import {
  Form,
  Button,
  Modal,
  Icon,
  Header,
  Segment,
  Radio
} from "semantic-ui-react";

export const AnimalFilter = props => (
  <Segment
    style={{
      width: "100%",
      backgroundColor: "lightgrey",
      margin: "auto",
      marginTop: 40
    }}
  >
    <Form>
      <Form.Select name='breed' options={props.breeds} onChange={props.filters.handleChange}/>
    </Form>
  </Segment>
);
