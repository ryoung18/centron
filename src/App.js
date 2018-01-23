import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import MenuMain from './MenuMain';
import Home from './Home';
import ProductList from './ProductList';
import Product from './Product';
import { _setState } from './helperFn';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCats: new Set(['APP SOME', 'ISISISISI', 'KSKSKSKS'])
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    _setState(this, {selectedCats: event})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Route exact path="/" render={() => <Home selectCat={this.handleClick} />} />
        <Route path="/product-list" render={() => <ProductList selectedCats={this.state.selectedCats} />} />
        <Route path="/product" component={Product} />
      </div>
    );
  }ß
}

export default App;
