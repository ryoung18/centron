import React, { Component } from "react";
import "./css/App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
// import Home from "./components/Home";
// import Product from "./components/Product";
import Nav from "./containers/Nav";
// import ProductList from "./components/ProductList";
// import ProductListFilter from "./components/ProductListFilter";
import { connect } from 'react-redux';
import { fetchItems } from "./actions/productsActions";
import { ajaxRequest, setStateOnTimeOut } from "./utils/helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: 10000
    }
  }

  componentDidMount() {
    this.setState(this.props.fetchItems)
  }

  render() {
    console.log(this.props)
    debugger
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state
  };
};


export default connect(mapStateToProps, { fetchItems })(App);
