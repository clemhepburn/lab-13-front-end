import React, { Component } from 'react';
import './Auth.css';
import { signUp, signIn } from '../utils/api';

export default class Auth extends Component {
  state = {
    isSignUp: true,
    username: '',
    password: '',
    error: ''
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

  handleSubmit = async e => {
    const { isSignUp } = this.state;
    const { onUser, history } = this.props;
    e.preventDefault();

    this.setState({ error: '' });

    try {
      const action = isSignUp ? signUp : signIn;
      const user = await action(this.state);
      onUser(user);
      history.push('/');
    }
    catch (err) {
      this.setState({ error: err.error });
    }
  }


  render() {
    const { isSignUp, username, password, error } = this.state;
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h3>Log in/Sign up!</h3>
        <input name="username" placeholder="username" value={username} onChange={this.handleUsernameChange} required={true}></input>
        <input name="password" placeholder="password" type='password' value={password} onChange={this.handlePasswordChange} required={true}></input>
        <button onClick={this.handleSwitch} className="login button">Sign { isSignUp ? 'Up' : 'In'}</button>  
        { error && <p>{error}</p>}
      </form>
    );
  }
}
