import React, { Component } from "react";
import "./css/App.css";
import { Route, withRouter, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Login";
import Nav from "./containers/Nav";
import ProductList from "./components/ProductList";
import ProductListFilter from "./components/ProductListFilter";
import { connect } from 'react-redux';
import { fetchItems } from "./actions/productsActions";
import { setStateOnTimeOut } from "./utils/helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCats: new Set(),
      filterMenu: {
        isVisible: 0
      },
      favoritedItems: ['hik1022','hik1024','hik1027']
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchItems()
    // this.setState({...this.state, ...ajaxRequest})
  }

  handleCategoryChange(event) {
    const { id } = event.currentTarget,
      { pathname } = event.view.location,
      { selectedCats } = this.state;


    //events from Home
    if(id === "All") {
      this.setState({ selectedCats: new Set() });
      return;
    }

    if (pathname === "/") {
      this.setState({ selectedCats: new Set([id])});
      return;
    }

    //events from ProductListFilter
    let newSelected = new Set(selectedCats);

    if (selectedCats.has(id)) {
      newSelected.delete(id);
      this.setState({ selectedCats: newSelected });
      return;
    }

    newSelected.add(id);
    this.setState({ selectedCats: newSelected });
  }

  handleClick(event) {
    const newState = event.currentTarget.id,
      { isVisible } = this.state.filterMenu;

    const options = {
      filterVisible: {
        filterMenu: { isVisible: isVisible + 1 }
      }
    };

    this.setState(options[newState]);

    if (isVisible) {
      let nextState = { filterMenu: { isVisible: 0 } };

      setStateOnTimeOut(this, nextState);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //hide ProductListFilter when exiting product-list path.
    if(prevProps.location.pathname === '/product-list' &&
      prevProps.history.location.pathname !== '/product-list' &&
      this.state.filterMenu.isVisible) {
      this.setState({ filterMenu: { isVisible: 0 } })
    }

    if(prevProps.location.pathname === '/product-list' &&
      prevProps.history.location.pathname !== '/product-list' &&
      this.state.filterMenu.isVisible) {
      this.setState({ filterMenu: { isVisible: 0 } })
    }

  }

  render() {
    // console.log('App', this.state, this.props)
    const { selectedCats } = this.state,
      { isVisible } = this.state.filterMenu;

    return (
      <div className="App">
        <Header />
        <Nav />
        {isVisible ? (
          <ProductListFilter
            categories={this.props.categories}
            selectedCats={selectedCats}
            filterClose={this.handleClick}
            selectCat={this.handleCategoryChange}
            isVisible={isVisible}
          />
        ) : (
          ""
        )}
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            exact
            path="/"
            render={(props) =>{
              return <Home
                selectCat={this.handleCategoryChange}
                location={props.location}
              /> } }
          />
          <Route path="/products/:item" component={Product} />
          <Route
            path="/products"
            render={(props) => {
              return <ProductList
                location={props.location}
                fetched={this.props.fetched}
                products={this.props.products}
                selectedCats={this.state.selectedCats}
                showFilterMenu={this.handleClick}
                filterMenuVisible={isVisible}
              />
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('ssss', state)
  const { fetching, fetched, categories, products } = state.products;
  return {
    fetching,
    fetched,
    categories,
    products,
  };
};

export default withRouter(connect(mapStateToProps, { fetchItems })(App))
