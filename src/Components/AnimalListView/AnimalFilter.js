import React from "react";
import { Form, Button, Header, Segment, Checkbox } from "semantic-ui-react";
import { SHELTER, FOSTER_ONLY, NEED_FOSTER, ADOPTABLE } from "../../Constants";
import { colors } from "../../Constants/"

export const AnimalFilter = props => (
  <Segment
    style={{
      width: "100%",
      backgroundColor: colors.backgroundB,
      margin: "auto",
      marginTop: 40
    }}
  >
    <Header>Filter Results</Header>
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
      <Segment>
        <Header style={{ width: "100%", margin: "auto", textAlign: "center" }}>
          Age Filter
        </Header>
        <Form.Select
          name="greaterOrLessThan"
          label="< / >"
          options={[{ text: "<", value: "<" }, { text: ">", value: ">" }]}
          onChange={props.filters.handleChangeAge}
          value={props.ageFilter.greaterOrLessThan}
        />
        <Form.Input
          type="number"
          label="Years"
          name="years"
          onChange={props.filters.handleChangeAge}
          value={props.ageFilter.years}
        />
        <Form.Input
          type="number"
          label="Months"
          name="months"
          onChange={props.filters.handleChangeAge}
          value={props.ageFilter.months}
        />
        <Button onClick={props.filters.handleFilterClearAge}>
          Show All Ages
        </Button>
      </Segment>
      {props.role === SHELTER && (
        <Segment>
          <Form.Field>
            <Checkbox
              radio
              label="Show All"
              name="status"
              value="Show All"
              checked={!props.filter.status}
              onChange={props.filters.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="In Foster"
              name="status"
              value={FOSTER_ONLY}
              checked={props.filter.status === FOSTER_ONLY}
              onChange={props.filters.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="Need Foster"
              name="status"
              value={NEED_FOSTER}
              checked={props.filter.status === NEED_FOSTER}
              onChange={props.filters.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label="Adoptable"
              name="status"
              value={ADOPTABLE}
              checked={props.filter.status === ADOPTABLE}
              onChange={props.filters.handleChange}
            />
          </Form.Field>
        </Segment>
      )}
    </Form>
  </Segment>
);
