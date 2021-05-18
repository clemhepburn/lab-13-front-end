import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <NavLink class="home" to="/">iTodo</NavLink>
        <NavLink to="/todos">My List</NavLink>
        
      </header>
    );
  }

}
 
export default Header;