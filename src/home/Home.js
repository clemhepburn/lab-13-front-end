import { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Home.css';
import Auth from '../Auth/Auth';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <Auth />
      </div>
    );
  }

}