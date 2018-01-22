import React,  { Component } from 'react';
import './Container.css';

const Container = ( {menu, outer, content, inner } ) => {
  return (
      <div className={ `outer-container ${outer}` }>
        {menu}
        <div className={ `inner-container ${inner}` }>
          {content}
        </div>
      </div>
  )
}

export default Container;
