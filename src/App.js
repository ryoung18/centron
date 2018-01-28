import React, { Component } from "react";
import "./css/App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Nav from "./containers/Nav";
import ProductList from "./components/ProductList";
import ProductListFilter from "./components/ProductListFilter";
import { connect } from 'react-redux';
import { fetchItems } from "./actions/productsActions";
// import { ajaxRequest, setStateOnTimeOut } from "./utils/helpers";
import { setStateOnTimeOut } from "./utils/helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCats: new Set(),
      filterMenu: {
        isVisible: 0
      },
      favoritedItems: new Set()
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  // componentWillMount(){
  //   this.props.dispatch(fetchItems)
  //
  // }

  componentDidMount() {
    console.log('ppp',this.props.fetchItems(1))
    console.log('ppp',this.props.fetchItems(1))
    console.log('ppp',this.props.fetchItems(1))
    console.log('ppp',this.props.fetchItems(1))
    // this.setState({products: this.props.fetchItems().payload})
  }


  handleCategoryChange(event) {
    const { id } = event.currentTarget,
      { pathname } = event.view.location,
      { selectedCats } = this.state;

    if (pathname === "/") {
      this.setState({ selectedCats: new Set([id]) });
      return;
    }

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


  render() {

    console.log(this)
    const { categories, selectedCats } = this.state,
      { isVisible } = this.state.filterMenu;

    return (
      <div className="App">
        <Header />
        <Nav />
        {isVisible ? (
          <ProductListFilter
            categories={categories}
            selectedCats={selectedCats}
            filterClose={this.handleClick}
            selectCat={this.handleCategoryChange}
            isVisible={isVisible}
          />
        ) : (
          ""
        )}
        <Route
          exact
          path="/"
          render={() => <Home selectCat={this.handleCategoryChange} />}
        />
        <Route
          path="/product-list"
          render={() => (
            <ProductList
              products={this.state.products}
              selectedCats={this.state.selectedCats}
              showFilterMenu={this.handleClick}
              filterMenuVisible={isVisible}
            />
          )}
        />
        <Route path="/product" component={Product} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps, { fetchItems })(App);
