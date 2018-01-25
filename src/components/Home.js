import React from 'react';
import '../css/Home.css';
import { Link } from  'react-router-dom';


const Home = ({categories, selectCat}) => {
  let content =
    categories.map(category => {
      return (
        <li key={category}>
          <Link
            to="/product-list"
            onClick={ ()=> selectCat(new Set([category])) }
          >
            {category}
          </Link>
        </li>
      )
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

      <div className="inner-container center front-page">
        <div className="mosaic">
          <Link to="/product-list" onClick={ ()=> selectCat(new Set()) }>
            <div className="above-mosaic">
              Show All Items
            </div>
          </Link>
          <ul>
            {content}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home;

Home.defaultProps = {
  categories : [
    'Hand Brace',
    'Finger splint',
    'Sleeping Hand Brace',
    'Clavicle',
    'Wrist',
    'Lumbar',
    'Clavicle',
    'Clavicle',
    'Foot',
    'Sleeping Hand Brace'
  ]
};