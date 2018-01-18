import React,  { Component } from 'react';
import "./Nav.css";


class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar-items">
          <li><img src="svgs/menu-icon.svg" /></li>
          <li><img src="svgs/home-icon.svg" /></li>
          <li><img src="svgs/search-icon.svg" /></li>
          <li><img className="circle-btn" src="svgs/twitter-icon.svg" /></li>
          <li><img className="circle-btn" src="svgs/facebook-icon.svg" /></li>
          <li><img className="circle-btn" src="svgs/whatsapp-icon.svg" /></li>
          <li><img className="circle-btn" src="svgs/tumblr-icon.svg" /></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
