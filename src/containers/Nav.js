import React,  { Component } from 'react';
import "../css/Nav.css";
import { Link } from 'react-router-dom';
import MenuMain from './MenuMain';
import { setStateOnTimeOut, _setState } from '../utils/helpers';

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: 0,
      searchInput: '',
      display: 'default'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateHref = this.generateHref.bind(this);
  }

  handleChange(event) {
    this.setState( { searchInput: event.target.value })
  }

  handleClick(event) {
    const { id } = event.currentTarget;

    if (id === 'menu') {
      this.setState( { showMenu: this.state.showMenu+1 })

      if (this.state.showMenu === 1) {
        setStateOnTimeOut(this, { showMenu: 0 })
      };
      return;
    }

    if (id === 'search') {
      this.setState( { display: id });
      return;
    };

    this.setState( { display: 'default', searchInput: '' } )
  }

  generateHref(type) {
    let result;

    switch (type) {
      case 'email':
        result=`mailto:info@centronlp.com?subject=Centron%20Life%20Products%20-%20&body=Thanks%20dasds%0A%0ANewParagraph`;
        break;
      case 'twitter':
        result=`https://twitter.com/intent/tweet?text=Centron%20Life%20Products%20-%20Clavicle%20Supprt%20On%20Sale&url=https%3A%2F%2Fwww.centronlp.com%2Fclavicle%2Fhand&tsrc=twtr`;
        break;
      default: 'nope';
    }

    return result;
  }

  componentDidUpdate() {
    if (this.state.display === 'search') {
      this.textInput.focus();
    }
  }

  render() {
    const {display, showMenu} = this.state;
    let navItemDisplay;

    if (display === 'default') {
      navItemDisplay = (
        <ul className="navbar-items default">
          <li onClick={this.handleClick} id='menu'   >
            <img src="svgs/menu-icon.svg" alt='menu'/>
          </li>
          <li onClick={this.handleClick} id='default'>
            <Link to='/'>
              <img src="svgs/home-icon.svg" alt='home'/>
            </Link>
          </li>
          <li onClick={this.handleClick} id='search' >
            <img src="svgs/search-icon.svg" alt='search'/>
          </li>
          <li onClick={this.handleClick} id='default'>
            <a href={`mailto:info@centronlp.com?subject=Centron%20Life%20Products%20-%20${'hey'}&body=Thanks%20dasds%0A%0ANewParagraph`}>
              <img className="circle-btn" src="svgs/email-icon.svg" alt='mail' />
            </a>
          </li>
          <li onClick={this.handleClick} id='default'>
            <a
              href={`https://twitter.com/intent/tweet?text=Centron%20Life%20Products%20-%20Clavicle%20Supprt%20On%20Sale&url=https%3A%2F%2Fwww.centronlp.com%2Fclavicle%2Fhand&tsrc=twtr`}>
              <img className="circle-btn" src="svgs/twitter-icon.svg" alt='twitter'/>
            </a>
          </li>
        </ul>
      )
    }

    if (display === 'search') {
      navItemDisplay = (
        <ul className="navbar-items search">
          <li id='menu'><img src="svgs/search-icon.svg" alt='search'/></li>
          <li>
            <input
              value={this.state.searchInput}
              type="text"
              onChange={this.handleChange}
              ref={(input) => {this.textInput = input;}}
            />
          </li>
          <li onClick={this.handleClick} id='find'><button> Find </button></li>
          <li onClick={this.handleClick} id='default'><button> X </button></li>
        </ul>
      )
    }

    if (showMenu === 1) {
      navItemDisplay = (
        <ul className="navbar-items">
          <li onClick={this.handleClick} id='menu'><button> X </button></li>
        </ul>
      )
    }

    let styles = {
      position: 'absolute',
      color: 'black',
      'z-index': '1'
    }

    return (
      <div>
        {this.state.showMenu ? (
          <div style={styles}>
              HELL<br />LLOOO <br /> OEOEOEOEOE
          </div> ): ''}
        <nav>
          {navItemDisplay}
        </nav>
      </div>
    )
  }
}

export default Nav;
