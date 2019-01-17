import React, { Component } from "react";
import { connect } from "react-redux";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import { registerHost } from "../../ActionCreators";

class Register extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    capacityCat: "",
    capacityDog: "",
    passwordsMatch: false,
    emailsMatch: false,
    confirmEmail: "",
    confirmPassword: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  handleCheckPassword = event => {
    const passwordsMatch = this.state.password === this.state.confirmPassword;
    this.setState({ passwordsMatch });
    if (!passwordsMatch) {
      alert("Passwords do not match.");
    }
  };

  handleCheckEmail = event => {
    const emailsMatch = this.state.email === this.state.confirmEmail;
    this.setState({ emailsMatch });
    if (!emailsMatch) {
      alert("Emails do not match.  Do better next time.");
    }
  };

  handleRegisterHost = () => {
    const host = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      address: this.state.address,
      capacity: {
        dogs: Number(this.state.capacityDog),
        cats: Number(this.state.capacityCat)
      }
    };

    this.props.registerHost(host);
  };

  render() {
    const { step } = this.state;
    const values = this.state;
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            handleCheckEmail={this.handleCheckEmail}
            handleCheckPassword={this.handleCheckPassword}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            registerHost={this.handleRegisterHost}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

const mapDispatchToProps = dispatch => ({
  registerHost: host => dispatch(registerHost(host))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
