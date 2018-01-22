import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import MenuMain from './MenuMain';
import Home from './Home';
import ProductList from './ProductList';
import Product from './Product';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/product" component={Product} />
      </div>
    );
  }ß
}

export default App;
