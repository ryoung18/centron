import React, { Component } from 'react';
import './css/App.css';
import { Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Nav from './containers/Nav';
import ProductList from './containers/ProductList';
import { _setState } from './utils/helpers';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCats: new Set(),
      introAnimated: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    _setState(this, { selectedCats: event })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Route
          exact path="/"
          render={() =>
            <Home selectCat={this.handleClick} />}
          />
        <Route
          path="/product-list"
          render={() =>
            <ProductList selectedCats={this.state.selectedCats}/>}
           />
        <Route path="/product" component={Product} />
      </div>
    );
  }ß
}

export default App;
