import React, { Component } from "react";
import "../css/ProductList.css";
import LoadingScreen from "../components/LoadingScreen";

class ProductList extends Component {
  shouldComponentUpdate(nextProps) {
    //Component should only rerender when ...
    // 1. ProductList first loads (Filter menu not displayed)  - 0 Closed
    // 2. Filter menu is closing (final filter selections). - 2 Closing
    // Prevents uncessary rerender in the background. - 1 Open
    return (
      nextProps.filterMenuVisible !== 1 &&
      !(this.props.filterMenuVisible === 2 && nextProps.filterMenuVisible === 0)
    );
  }

  render() {
    const {
      products,
      selectedCats,
      showFilterMenu,
      heartSvg,
      ebaySvg
    } = this.props;

    console.log('plis', products)
    let filteredProducts = selectedCats.size
      ? products.filter(product => selectedCats.has(product.type))
      : products;

    let listProducts = filteredProducts.map(product => {
      return (
        <div className="line-container" key={product.partNumber}>
          <div className="item-image">
            <img src={product.img} alt="item" />
          </div>

          <div className="item-info-container">
            <div className="item-description">
              <h4> {product.title} </h4>
              <p> {product.partNumber}</p>
              <span className="slide-indicator" />
            </div>
            <div className="btns-hidden-container">
              <a href={product.amazonUrl}>
                <span className="circleBtn">
                  <img src={`svgs/${heartSvg}`} alt="favorite" />
                </span>
              </a>
              <a href={product.ebayUrl}>
                <span className="circleBtn">
                  <img src={`svgs/${ebaySvg}`} alt="ebay" />
                </span>
              </a>
            </div>
          </div>
        </div>
      );
    });

    console.log("prlist", this);
    return listProducts.length ? (
      <div className="product-list">
        <div className="outer-container z5 slide-up">
          <div className="menu">
            <a
              className="space text-left"
              onClick={showFilterMenu}
              id="filterVisible"
            >
              <h2> Filter: {[...selectedCats].join(", ") || "All"} </h2>
            </a>
          </div>
          <div className="inner-container inner-padding">
            {listProducts}
            <div className="bottom-spacing"> </div>
          </div>
        </div>
      </div>
    ) : (
      <LoadingScreen />
    );
  }
}
export default ProductList;

ProductList.defaultProps = {
  heartSvg: "heart-icon.svg",
  ebaySvg: "ebay-icon.svg"
};
