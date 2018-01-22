import React,  { Component } from 'react';
import "./Nav.css";
import MenuMain from './MenuMain';
import { setStateOnTimeOut, _setState } from './helperFn';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: 0,
      display: 'search',
      hrefInfo: 'hello'
    }

    this.handleClick = this.handleClick.bind(this);
    this.generateHref = this.generateHref.bind(this);
  }

  handleClick(event) {
    let {id} = event.currentTarget;
    if(id === 'menu') {
      _setState(this, {cshowMenu: this.state.showMenu+1} )

      if(this.state.showMenu === 1 ) {
        setStateOnTimeOut(this, {showMenu: 0})
      }
    }
  }

  generateHref(type) {
    console.log('lele', type)

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
    let navItemCss = {
      default: '',
      search: ''
    }

    let navItems = {
      default: [
        {svg: 'menu-icon.svg', id:'menu'},
        {svg: 'home-icon.svg', id:'home'},
        {svg: 'search-icon.svg', id:'search'},
        {svg: 'email-icon.svg', id:'email', css:'circle-btn', href: true },
        {svg: 'twitter-icon.svg', id:'twitter', css:'circle-btn', href: true },
        {svg: 'facebook-icon.svg', id:'facebook', css:'circle-btn'},
        {svg: 'whatsapp-icon.svg', id:'whatsapp', css:'circle-btn'}
      ],
      search: [
        {svg: 'search-icon.svg', id:'search icon'},
        {input: true, id: 'input' },
        {button: 'Done', id: 'button'}
      ]
    }

    let navItemDisplay = navItems[ this.state['display'] ].map(item => {
      let context = this;

      let something = {
        svg: ( <img src={`svgs/${item.svg}`} className={item.css} alt={item.id}/> ),
        href: function() { return (
          <a href={context.generateHref(item.id) } >
            {this.svg}
          </a> )
        },
        input: ( <input /> ),
        button: ( <button type="submit"> {item.button} </button>)
      }

      return (
        <li onClick={this.handleClick} id={item.id} key={item.id}>
          { something[item.svg]  || 'lll'}
        </li>
      )
    })

    return (
      <div>
        { this.state.showMenu ? <MenuMain show={this.state.showMenu}/> : '' }

        <nav>
          <ul className="navbar-items">
            {navItemDisplay}
          </ul>
        </nav>
      </div>
    )
  }
}

export default Nav;
