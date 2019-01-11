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
      <Form.Select
        name="breed"
        options={props.breeds}
        onChange={props.filters.handleChange}
      />
      <Form.Group>
        <Form.Checkbox
          label="Male"
          checked={props.filter.sex === "male"}
          name="sex"
          value="male"
          onChange={props.filters.handleNullableRadioChange}
        />
        <Form.Checkbox
          label="Female"
          checked={props.filter.sex === "female"}
          name="sex"
          value="female"
          onChange={props.filters.handleNullableRadioChange}
        />
      </Form.Group>
    </Form>
  </Segment>
);
