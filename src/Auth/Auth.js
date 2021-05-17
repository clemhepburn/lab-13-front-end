import React, { Component } from 'react';
import './Auth.css';

export default class Auth extends Component {
  state = {
    username: '',
    password: ''
  }
  render() {
    // const { username, password } = this.state;
    return (
      <form className="login">
        <h3>Log in/Sign up!</h3>
        <input name="username" placeholder="username"></input>
        <input name="password" placeholder="password"></input>
        <button className="login button">Log In</button>  
      </form>
    );
  }
}
