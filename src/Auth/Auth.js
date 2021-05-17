import React, { Component } from 'react';
import './Auth.css';

export default class Auth extends Component {
  state = {
    isSignUp: true,
    username: '',
    password: ''
  }

  handleSwitch = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  }

  handleUsernameChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
  }


  render() {
    const { isSignUp, username, password } = this.state;
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h3>Log in/Sign up!</h3>
        <input name="username" placeholder="username" value={username} onChange={this.handleUsernameChange} required={true}></input>
        <input name="password" placeholder="password" type='password' value={password} onChange={this.handlePasswordChange} required={true}></input>
        <button onClick={this.handleSwitch} className="login button">Sign { isSignUp ? 'Up' : 'In'}</button>  
        {/* <button onClick={this.handleSwitch}>
          {isSignUp
            ? 'Already Have An Account?'
            : 'Click here to log in'}
        </button> */}
      </form>
    );
  }
}
