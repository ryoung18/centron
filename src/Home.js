import React from 'react';
import './Home.css';
import { Link } from  'react-router-dom';

const Home = ({ catagories }) => {
  let content =
    catagories.map(catagory => {
      return <li key={catagory}> {catagory} </li>
    })

  return (
    <div className="outer-container z5 center">
      <div className="inner-container front-page op0">
        <div className="fade-in-logo">
          Centron
          <img src="images/centron-logo.png" alt='centron life product logo'/>
          Life Products
        </div>
      </div>

      <div className="inner-container front-page">
        <div>
        <Link to="/product-list">Product List</Link>
        </div>
        <div className="mosaic">
          <ul>
            { content }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;

Home.defaultProps = {
  catagories : [
    'Hand brace',
    'Finger splint',
    'Elbow Support',
    'Clavicle 1',
    'Wrist',
    'Lumbar',
    'Clavicle 2',
    'Clavicle 3',
    'Foot',
    'Sleeping Hand Brace'
  ]
};
