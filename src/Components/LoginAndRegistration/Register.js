import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";

class Register extends Component {
  state = {
    step: 1,
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
    capacityCat:"",
    capacityDog:"", 
    passwordsMatch: false,
    emailsMatch: false,
    confirmEmail:"",
    confirmPassword:""
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
    const passwordsMatch = this.state.password === this.state.confirmPassword
    this.setState({passwordsMatch})
    if (!passwordsMatch){
      alert("Passwords do not match.")
    }
  }

  handleCheckEmail = event => {
    const emailsMatch = this.state.email === this.state.confirmEmail
    this.setState({emailsMatch})
    if (!emailsMatch){
      alert("Emails do not match.  Do better next time.")
    }
  }

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
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export { Register };
