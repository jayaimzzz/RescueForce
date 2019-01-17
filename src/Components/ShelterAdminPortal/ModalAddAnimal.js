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
import { connect } from "react-redux";
import {
  addAnimal,
  getAnimals,
  getAllHosts
} from "../../ActionCreators";

const options = [
  { key: "dog", text: "dog", value: "dog" },
  { key: "cat", text: "cat", value: "cat" }
];

class ModalAddAnimal extends React.Component {
  state = {
    open: false,
    animal: this.props.animal
  };

  componentDidMount = () => this.props.getAllHosts();

  handleChange = (event, { name, value }) => {
    this.setState({
      animal: { ...this.state.animal, [name]: value }
    });
  };

  handleSexChange = (event, { value }) => {
    this.setState({
      animal: { ...this.state.animal, sex: value }
    });
  };

  handleToggle = name => (event, { value }) => {
    this.setState({
      animal: { ...this.state.animal, [name]: Boolean(value) }
    });
  };

  handleDateChange = (event, { value }) => {
    const [year, month, day] = value.split("-");
    const dob = new Date(year, month - 1, day);
    this.setState({
      animal: { ...this.state.animal, dob }
    });
  };

  handleOpen = event => {
    this.setState({
      open: true
    });
  };

  handleClose = event => {
    this.setState({
      open: false
    });
  };

  handleSubmit = event => {
    this.props.addAnimal(this.state.animal);
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Modal
        trigger={
          <Button className="submit-button" onClick={this.handleOpen}>
            <Icon color="red" size="large" name="paw" />
            Add a new animal
          </Button>
        }
        open={this.state.open}
        onClose={this.handleClose}
        size="tiny"
      >
        <Header textAlign="center" verticalalign="middle" as="h1">
          Add an animal!
        </Header>

        <Form size="large">
          <Segment color="grey">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Name"
                name="name"
                onChange={this.handleChange}
                placeholder="Name"
                required
              />

              <Form.Input
                type="date"
                name="dob"
                fluid
                label="Date of Birth"
                onChange={this.handleDateChange}
                placeholder="Date of Birth"
              />
              <Form.Input
                fluid
                name="breed"
                label="Breed"
                onChange={this.handleChange}
                placeholder="Breed"
              />

              <Form.Select
                fluid
                label="Species"
                name="species"
                options={options}
                onChange={this.handleChange}
                placeholder="Species"
                required
              />
            </Form.Group>

            <Form.Group inline>
              <Form.Field required>
                <label>Sex</label>
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Female"
                  value="female"
                  checked={this.state.animal.sex === "female"}
                  onChange={this.handleSexChange}
                />
              </Form.Field>
              <Form.Field >
                <Radio
                  label="Male"
                  value="male"
                  checked={this.state.animal.sex === "male"}
                  onChange={this.handleSexChange}
                />
              </Form.Field>
            </Form.Group>

            <Form.Group inline>
              <label>Does the animal have special needs?</label>
              <Form.Radio
                label="yes"
                value="true"
                checked={this.state.animal.specialNeeds}
                onChange={this.handleToggle("specialNeeds")}
              />
              <Form.Radio
                label="no"
                value=""
                checked={
                  this.state.animal.specialNeeds !== undefined &&
                  !this.state.animal.specialNeeds
                }
                onChange={this.handleToggle("specialNeeds")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Does the animal have a special diet?</label>
              <Form.Radio
                label="yes"
                value="true"
                checked={this.state.animal.specialDiet}
                onChange={this.handleToggle("specialDiet")}
              />
              <Form.Radio
                label="no"
                value=""
                checked={
                  this.state.animal.specialDiet !== undefined &&
                  !this.state.animal.specialDiet
                }
                onChange={this.handleToggle("specialDiet")}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="dietNotes"
                label="Diet Notes"
                placeholder="Diet Notes"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal pregnant?</label>
              <Form.Radio
                label="yes"
                value="true"
                checked={this.state.animal.pregnantValue}
                onChange={this.handleToggle("pregnant")}
              />
              <Form.Radio
                label="no"
                value=""
                checked={
                  this.state.animal.pregnant !== undefined &&
                  !this.state.animal.pregnant
                }
                onChange={this.handleToggle("pregnant")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal fixed?</label>
              <Form.Radio
                label="yes"
                value="true"
                checked={this.state.animal.fixed}
                onChange={this.handleToggle("fixed")}
              />
              <Form.Radio
                label="no"
                value=""
                checked={
                  this.state.animal.fixed !== undefined &&
                  !this.state.animal.fixed
                }
                onChange={this.handleToggle("fixed")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal animal-friendly?</label>
              <Form.Radio
                label="yes"
                value="true"
                checked={this.state.animal.animalFriendly}
                onChange={this.handleToggle("animalFriendly")}
              />
              <Form.Radio
                label="no"
                value=""
                checked={
                  this.state.animal.animalFriendly !== undefined &&
                  !this.state.animal.animalFriendly
                }
                onChange={this.handleToggle("animalFriendly")}
              />
            </Form.Group>

            <Form.Group inline>
              <label>Is the animal people-friendly?</label>
              <Form.Radio
                label="yes"
                value="true"
                checked={this.state.animal.peopleFriendly}
                onChange={this.handleToggle("peopleFriendly")}
              />
              <Form.Radio
                label="no"
                value=""
                checked={
                  this.state.animal.peopleFriendly !== undefined &&
                  !this.state.animal.peopleFriendly
                }
                onChange={this.handleToggle("peopleFriendly")}
              />
            </Form.Group>

            <Form.TextArea
              name="notes"
              label="Details"
              placeholder="About me!"
              autoHeight
              rows={5}
              onChange={this.handleChange}
            />

            {/* {this.props.role === "shelter" && (
              <Form.Group widths="equal">
                <Form.Select
                  fluid
                  name="hostId"
                  label="Host Id"
                  options={this.props.hostOptions}
                  onChange={this.handleChange}
                  placeholder="Host Id"
                />

                <Form.Select
                  fluid
                  name="status"
                  label="Status"
                  options={adoptionOptions}
                  onChange={this.handleChange}
                  placeholder="Status"
                />
              </Form.Group>
            )} */}
          </Segment>
        </Form>

        <Modal.Actions>
          <Button.Group fluid>
            <Button
              className="submit-button"
              onClick={this.handleSubmit}
              disabled={
                !this.state.animal.sex ||
                !this.state.animal.name ||
                !this.state.animal.species || 
                this.props.inProgress
              }
            >
              <Icon name="sticky note outline" /> Add
            </Button>
            <Button.Or />
            <Button
              color="red"
              className="cancel-button"
              onClick={this.handleClose}
            >
              <Icon name="remove" /> Cancel
            </Button>
          </Button.Group>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  role: state.auth.user.type,
  hostOptions: state.hosts.map(host => ({ text: host.name, value: host._id })),
  animal: { shelterId: state.auth.user.data._id },
  inProgress: state.inProgress.addAnimal
});

const mapDispatchToProps = { addAnimal, getAnimals, getAllHosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAddAnimal);
