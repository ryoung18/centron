import React, { Component } from "react";
import "../css/MenuMain.css";
import LoadingScreen from "../components/LoadingScreen";
import { connect } from "react-redux";
import { fetchItems } from "../actions/productsActions";
import { setStateOnTimeOut, ajaxRequest } from "../utils/helpers";

class MenuMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBtn: this.props.menuBtns[0],
      loaded: false,
      user: {}
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const newState = {
      selectedBtn: this.props.menuBtns[0],
      user: {
        name: "Joe",
        type: "Business Account",
        img:
          "http://piratevinyldecals.com/wps/wp-content/uploads/2014/01/Hello-Kitty-Winking-pv183.png"
      },
      categories: ajaxRequest.categories,
      products: ajaxRequest.products
    };

    setStateOnTimeOut(this, newState);
  }

  handleClick(event) {
    this.setState({
      selectedBtn: event.currentTarget.id
    });
  }

  render() {
    console.log(products)
    const { products, heartSvg,
      ebaySvg } = this.props;

    let listProducts = products.map(product => {
      return (
        <div className="line-container" key={product.partNumber}>
          <div className="item-image">
            <img src={product.images} alt="item" />
          </div>

          <div className="item-info-container">
            <div className="item-description">
              <h4> {product.title} </h4>
              <p> {product.partNumber}</p>
              <span className="slide-indicator" />
            </div>
            <div className="btns-hidden-container">
              <a href={product.stores[0].url}>
                <span className="circleBtn">
                  <img src={`svgs/${heartSvg}`} alt="favorite" />
                </span>
              </a>
              <a href={product.stores[1].url}>
                <span className="circleBtn">
                  <img src={`svgs/${ebaySvg}`} alt="ebay" />
                </span>
              </a>
            </div>
          </div>
        </div>
      );
    });

    let menuBar = this.props.menuBtns.map(button => {
      return (
        <li
          className={this.state.selectedBtn === button ? "selected" : ""}
          onClick={this.handleClick}
          id={button}
          key={button}
        >
          {button}
        </li>
      );
    });

    console.log("Men");
    return listProducts.length ? (
      <div
        className={`outer-container z110 ${
          this.props.show === 1 ? "slide-right" : "slide-left"
        }`}
      >
        <div className="user-container">
          <div className="user-image">
            <img className="round" src={this.state.user.img} alt="user" />
          </div>
          <div className="user-info">
            <h2>{this.state.user.name} </h2>
            <p> {this.state.user.type} </p>
          </div>
        </div>
        <div className="menu-bar">
          <ul>{menuBar}</ul>
        </div>

        <div className="inner-container noTopPadding inner-padding">
          {listProducts}
          <div className="bottom-spacing" />
        </div>
      </div>
    ) : (
      <LoadingScreen />
    );
  }
}

const mapStateToProps = state => {
  const { fetching, fetched, categories, products } = state.products;
  return {
    fetching,
    fetched,
    categories,
    products
  };
};

export default connect(mapStateToProps, { fetchItems })(MenuMain);

MenuMain.defaultProps = {
  heartSvg: "heart-icon.svg",
  amazonSvg: "amazon-icon.svg",
  ebaySvg: "ebay-icon.svg",
  menuBtns: ["Favorites", "Messages", "Settings"],
  defaultImg:
    "https://partners.salesforce.com/resource/1513943838000/tdxlib/img/default-user.png"
};
