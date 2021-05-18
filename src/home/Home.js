import { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Home.css';


export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        
        <div><Link to="/todos">Logged in? Click here for your todo list</Link></div>
        <p>or</p>
        <div><Link to="/auth">Sign up or Sign in!</Link></div>
      </div>
    );
  }

}