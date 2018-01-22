import React,  { Component } from 'react';
import "./Nav.css";
import MenuMain from './MenuMain';
import { setStateOnTimeOut, _setState } from './helperFn';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: 0,
      searchInput: '',
      display: 'default',
      hrefInfo: 'hello'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.generateHref = this.generateHref.bind(this);
  }

  handleChange(event) {
    _setState(this, {searchInput: event.target.value})
    console.log(this.state.searchInput)
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }


  handleClick(event) {
    let {id} = event.currentTarget;

    if(id === 'menu') {
      _setState(this, {showMenu: this.state.showMenu+1});
      if(this.state.showMenu === 1) {
        setStateOnTimeOut(this, {showMenu: 0})
      };
      return;
    }

    if(id === 'search') {
      _setState(this, {display: id});
      return;
    };

    _setState(this, {display: 'default', searchInput: ''} )

  }

  generateHref(type) {
    let result;
    // <a href={`https://twitter.com/intent/tweet?text=Centron%20Life%20Products%20-%20Clavicle%20Supprt%20On%20Sale&url=https%3A%2F%2Fwww.centronlp.com%2Fclavicle%2Fhand&tsrc=twtr`}>
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

  render() {
    let {display} = this.state;
    let navItemDisplay;

    if(display === 'default') {
      navItemDisplay = (
        <ul className="navbar-items default">
          <li onClick={this.handleClick} id='menu'   ><img src="svgs/menu-icon.svg" alt='menu'/></li>
          <li onClick={this.handleClick} id='default'><img src="svgs/home-icon.svg" alt='home'/></li>
          <li onClick={this.handleClick} id='search' ><img src="svgs/search-icon.svg" alt='search'/></li>
          <li onClick={this.handleClick} id='default'>
            <a href={`mailto:info@centronlp.com?subject=Centron%20Life%20Products%20-%20${'hey'}&body=Thanks%20dasds%0A%0ANewParagraph`}>
              <img className="circle-btn" src="svgs/email-icon.svg" alt='mail' />
            </a>
          </li>
          <li onClick={this.handleClick} id='default'>
            <a href={`https://twitter.com/intent/tweet?text=Centron%20Life%20Products%20-%20Clavicle%20Supprt%20On%20Sale&url=https%3A%2F%2Fwww.centronlp.com%2Fclavicle%2Fhand&tsrc=twtr`}>
              <img className="circle-btn" src="svgs/twitter-icon.svg" alt='twitter'/>
            </a>
          </li>
        </ul>
      )
    }

    if(display === 'search') {
      navItemDisplay = (
        <ul className="navbar-items search">
          <li id='menu'><img src="svgs/search-icon.svg" alt='search'/></li>
          <li><input value={this.state.searchInput} onChange={this.handleChange} ref={(input) => { this.textInput = input; }} /></li>
          <li onClick={this.handleClick} id='find'><button> Find </button></li>
          <li onClick={this.handleClick} id='default'><button> X </button></li>
        </ul>
      )
    }

    return (
      <div>
        { this.state.showMenu ? <MenuMain show={this.state.showMenu}/> : '' }
        <nav>
          {navItemDisplay}
        </nav>
      </div>
    )
  }
}

export default Nav;
