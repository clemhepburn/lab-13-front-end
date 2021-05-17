import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>Todo List</h1>
        <NavLink to="/todos">Todo List</NavLink>
        
      </header>
    );
  }

}
 
export default Header;