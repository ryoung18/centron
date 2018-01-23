import React,  { Component } from 'react';
import './ProductList.css';
import ProductListFilter from './ProductListFilter';
import { setStateOnTimeOut, ajaxRequest, _setState, loadingScreen } from './helperFn';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      categories: [],
      products: [],
      showFilter: false,
      filtered: new Set()
    }

    this.handleClick = this.handleClick.bind(this);
    this.filterClick = this.filterClick.bind(this);
  }

  componentDidMount() {
    let newState = {
        loaded: true,
        categories: ['Clavicle', 'Hand Brace', 'Sleeping Hand Brace', 'Lumbar'],
        products: ajaxRequest,
        filtered: this.props.selectedCats
      }
    setStateOnTimeOut(this, newState, 1000)
  }


  filterClick(status) {
    let newState = {
     'filterClose': {showFilter: false}
    }

    if(status !== 'filterClose') {
      _setState(this, {filtered: status} )
    }

    setStateOnTimeOut(this, newState.filterClose, 1000)
  }


  handleClick(event) {
    let {id} = event.currentTarget

    let newState = {
     'filterOpen': {showFilter: true}
    }

    _setState(this, newState[id])
 }

  render() {
    if(!this.state.loaded) { return loadingScreen() }

    let {products, filtered} = this.state;

    let filterProducts = filtered.size ? products.filter( product => filtered.has(product.type) ) : products;

    let listProducts = filterProducts.map(product => {
      let displayPrice = (site) =>  (`$${site[0]} - $${site[1]}`);
      let displaySvg = (svg) => (`svgs/${svg}`)

      return (
        <div className="line-container" key={product.partNumber}>
          <div className="item-image">
              <img src={product.img} alt='item'/>
          </div>

          <div className="item-info-container">
              <div className="item-description">
                <h4> {product.title} </h4>
                <p> {product.partNumber}</p>
                <span className="slide-indicator"></span>
              </div>
              <div className="btns-hidden-container">
                <a href={product.amazonUrl}>
                  <img src={displaySvg(this.props.amazonSvg)} alt='amazon' />
                  <p> {displayPrice(product.amazonPrice)} </p>
                </a>
                <a href={product.ebayUrl}>
                  <img src={displaySvg(this.props.ebaySvg)} alt='ebay'/>
                  <p> {displayPrice(product.ebayPrice)}  </p>
                </a>
              </div>
          </div>
        </div>
      )
    })


    return (
      <div>
        {this.state.showFilter ?
          <ProductListFilter
            filterClick={this.filterClick}
            filtered={this.state.filtered}
            categories={this.state.categories}
          />
        : ''}
        <div className="outer-container z5 slide-up" >
          <div className="menu">
            <a className="space text-left" onClick={this.handleClick} id='filterOpen'>
              <h2> Filter: {[...this.state.filtered].join(', ') || 'All'} </h2>
            </a>
          </div>

          <div className="inner-container inner-padding">
            {listProducts}
            <div className="bottom-spacing"> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductList;

ProductList.defaultProps = {
  amazonSvg: 'amazon-icon.svg',
  ebaySvg: 'ebay-icon.svg'
}
