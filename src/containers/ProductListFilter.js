import React, { Component } from 'react';
import '../css/ProductListFilter.css';
import { _setState } from '../utils/helpers';

class ProductListFilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animation: 'slide-up',
      filterBy: this.props.filtered //shows if a filter was prevously selected.
    }

    this.handleClick = this.handleClick.bind(this);
  }

  isUpdated() {
    const { filterBy } = this.state;
    const { filtered } = this.props;

    if( filterBy.size !== filtered.size) {
      return true;
    }

    for(let k of [...filterBy] ) {
      if(!filtered.has(k)) {
        return true;
      }
    }

    return false
  }

  handleClick(event) {
    const { filterClick } = this.props;
    const { filterBy } = this.state;

    if (event === 'close') {
      _setState(this, { animation: 'slide-out'} )

      if(this.isUpdated()) {
        filterClick(filterBy)
      } else {
        filterClick('filterClose')
      }
    }

    if (event.currentTarget) {
      let { id } = event.currentTarget;
      let selected = new Set([...filterBy]);

      if (selected.has(id) ) {
        selected.delete(id)
      } else {
        selected.add(id);
      }

      _setState(this, { filterBy: selected })
    }
  }

  render() {
    let categoryList = this.props.categories.map(category => {
    let selected = this.state.filterBy.has(category) ?
        'on-btn' : 'off-btn';

      return (
        <div className="line-container filter" key={category}>
          <h2>
            {category}
          </h2>
          <div
            className={`on-off-btn ${selected}`}
            onClick={this.handleClick}
            id={category} >
          </div>
        </div>
      )
    })

    return (
      <div className={`outer-container z10 ${this.state.animation}`}>
        <div className="menu">
          <a className="space" id="close" onClick={event => this.handleClick(event.currentTarget.id)}>
            <h2> Close </h2>
          </a>
        </div>

        <div className="inner-container inner-padding">
          <h2> Type </h2>
          {categoryList}
          <div className="bottom-spacing" />
        </div>
      </div>
    );
  }
}

export default ProductListFilter;
