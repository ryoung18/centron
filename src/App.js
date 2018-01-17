import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
