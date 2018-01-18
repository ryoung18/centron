import React, { Component } from 'react';
import './App.css';
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
        <MenuMain />
        <Home />
        <ProductList />
        <Product />
      </div>
    );
  }ß
}

export default App;
