import React, { Component } from "react";
import axios from "axios";
import "../css/Product.css";
import { API_URL, BASE_URL } from "../utils/helpers";

class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: {},
      fetched: false
    }
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/api/products/${this.props.match.params.item}`)
      .then((data) => {
        this.setState({products: data.data.products[0], fetched: true})
      })
      .catch( err => console.log('error', err))
  }

  render() {
    const { products } = this.state;
    let storeLinks = {};

    if(this.state.fetched) {
      products.stores.forEach(item => {
        let button = ( <a href={item.url}> {item.size} ${item.price} </a> );

        if(storeLinks[item.name]) {
          storeLinks[item.name].push(button);
        } else {
          storeLinks[item.name] = [button];
        }
      })
    }


    console.log(storeLinks)


    return (<div className="outer-container slide-up">
      <div className="inner-container inner-padding">
        <div className="product-images">
          <img
            src="https://i.ebayimg.com/images/g/kWYAAOSwYmZXI9kt/s-l1600.jpg"
            alt="clavicl brace"
          />
        </div>
        <div className="product-title">
          <p> Clavicle Strap Shoulder Support Brace </p>
        </div>
        <div className="stores" >
          <ul>
            <li>
              <img src={`${BASE_URL}/svgs/amazon-icon.svg`} /> {storeLinks.Amazon}
            </li>
            <li>
              <img src={`${BASE_URL}/svgs/ebay-icon.svg`} /> {storeLinks.ebay}
            </li>
          </ul>

        </div>
        <ul>
          <li>
            {products.description}
          </li>
        </ul>

        <div className="bottom-spacing"> asdasd </div>
      </div>
    </div>)
  }
};

export default Product
