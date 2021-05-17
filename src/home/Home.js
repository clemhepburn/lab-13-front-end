import { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Home.css';


export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <Link to="/auth">Sign up or Sign in!</Link>
      </div>
    );
  }

}