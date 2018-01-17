import React,  { Component } from 'react';
import "./Navbar.css";


class Navbar extends Component {

  render() {
    return (
      <navbar>
        <ul class="navbar-items">
          <li><img src="svgs/menu-icon.svg" /></li>
          <li><img src="svgs/home-icon.svg" /></li>
          <li><img src="svgs/search-icon.svg" /></li>
          <li><img class="circle-btn" src="svgs/twitter-icon.svg" /></li>
          <li><img class="circle-btn" src="svgs/facebook-icon.svg" /></li>
          <li><img class="circle-btn" src="svgs/whatsapp-icon.svg" /></li>
          <li><img class="circle-btn" src="svgs/tumblr-icon.svg" /></li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar;
