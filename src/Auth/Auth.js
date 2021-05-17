import React, { Component } from 'react';
import './Auth.css';

export default class Auth extends Component {
  state = {
    isSignUp: true
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleSubmit = e => {
    e.preventDefault();
  }


  render() {
    const { isSignUp } = this.state;
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h3>Log in/Sign up!</h3>
        <input name="username" placeholder="username"></input>
        <input name="password" placeholder="password" type='password'></input>
        <button onClick={this.handleSwitch} className="login button">Sign {isSignUp ? 'Up' : 'In'}</button>  
      </form>
    );
  }
}
