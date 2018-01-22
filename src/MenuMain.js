import React,  { Component } from 'react';
import "./MenuMain.css";
import { setStateOnTimeOut, ajaxRequest } from './helperFn';

class MenuMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedBtn: this.props.menuBtns[0],
      loaded: false,
      user : {}
    }

    this.handleClick = this.handleClick.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    let newState = {
        loaded: true,
        selectedBtn: this.props.menuBtns[0],
        user : {
          name: 'Joe',
          type: 'Business Account',
          img: 'http://piratevinyldecals.com/wps/wp-content/uploads/2014/01/Hello-Kitty-Winking-pv183.png'
        },
        categories: ['Clavicle', 'Hand Brace', 'Sleeping Hand Brace', 'Lumbar'],
        products: ajaxRequest
      };

    setStateOnTimeOut(this, newState, 500)
  }

  handleClick(event) {
    this.setState({
      selectedBtn: event.currentTarget.id
    })
  }

  show(){
         if(this.props.show === 1) return 'slide-right';
         if(this.props.show === 2) return 'slide-left';
         return 'hide';
       }

  render() {

    if(!this.state.loaded) return <div> loading... </div>

    let listProducts =
        this.state.products.map(product => {
        let displayPrice = (site) =>  (`$${site[0]} - $${site[1]}`);
        let displaySvg = (svg) => (`svgs/${svg}`);

        return (
              <div className="line-container" key={product.id}>
                <div className="item-image">
                    <img src={product.img} alt={product.title}/>
                </div>

                <div className="item-info-container">
                    <div className="item-description">
                      <h4> aa {product.title} </h4>
                      <p> {product.partNumber}</p>
                      <span className="slide-indicator"></span>
                    </div>
                    <div className="btns-hidden-container">
                      <a href={product.amazonUrl}>
                        <img src={displaySvg(this.props.amazonSvg)} alt='link to amazon'/>
                        <p> {displayPrice(product.amazonPrice)} </p>
                      </a>
                      <a href={product.ebayUrl}>
                        <img src={displaySvg(this.props.ebaySvg)}  alt='link to ebay'/>
                        <p> {displayPrice(product.ebayPrice)}  </p>
                      </a>
                    </div>
                </div>
              </div>
            )
          })


    let menuBar =
        this.props.menuBtns.map(button =>{
        return (
            <li
              className={this.state.selectedBtn === button ? 'selected': ''}
              onClick={this.handleClick}
              id={button}
              key={button} >
              {button}
            </li>
          )
        })

    return (
      <div className={ `outer-container z110 ${this.show()}` }>
        <div className="user-container">
          <div className="user-image">
            <img  className="round" src={this.state.user.img} alt='user' />
          </div>
          <div className="user-info">
            <h2>{this.state.user.name} </h2>
            <p> {this.state.user.type} </p>
          </div>
        </div>
        <div className="menu-bar">
          <ul>
            {menuBar}
          </ul>
        </div>

        <div className="inner-container noTopPadding inner-padding">
          {listProducts}
          <div className="bottom-spacing" />
        </div>
      </div>
    )
  }
}

export default MenuMain;

MenuMain.defaultProps = {
  amazonSvg: 'amazon-icon.svg',
  ebaySvg: 'ebay-icon.svg',
  menuBtns: [
    'Favorites',
    'Messages',
    'Settings'
  ],
  defaultImg: 'https://partners.salesforce.com/resource/1513943838000/tdxlib/img/default-user.png'
}
