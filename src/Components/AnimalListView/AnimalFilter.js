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
      <Form.Checkbox
        label="Must Be Animal Friendly"
        checked={Boolean(props.filter.animalFriendly)}
        name="animalFriendly"
        value="true"
        onChange={props.filters.handleToggle}
      />
      <Form.Checkbox
        label="Must Be Kid Friendly"
        checked={Boolean(props.filter.peopleFriendly)}
        name="peopleFriendly"
        value="true"
        onChange={props.filters.handleToggle}
      />
    </Form>
  </Segment>
);
