import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="outer-container z5 center hide">
        <div className="inner-container front-page op0">
          <div className="fade-in-logo">
            Centron
            <img src="images/centron-logo.png" />
            Life Products
          </div>
        </div>

        <div className="inner-container front-page">
          <div className="mosaic">
            <ul>
              <li><a href=""> 1 hand brace </a></li>
              <li>2 Finger splint</li>
              <li>3 Elbow Support</li>
              <li>4 Calvicle </li>
              <li>5 Wrist</li>
              <li>6 Lumbar</li>
              <li>7 Calvicle</li>
              <li>8 Calvicle</li>
              <li>9 Foot</li>
              <li>10 Sleeping Hand Brace</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
