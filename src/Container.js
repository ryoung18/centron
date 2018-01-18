import React,  { Component } from 'react';
import './Container.css';

const Container = ( {menu, outerCSS, innerContainer, innerCSS } ) => (

  <div className=`{ outer-container ${outerCSS} }`>
    {menu}
       <div className=`{ inner-container ${innerCSS} }`>
        {innerContainer}
        { if({menu})  <div className="bottom-spacing"/> }
      </div>
  </div>

)

export default Container;
