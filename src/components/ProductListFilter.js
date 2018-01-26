import React from "react";
import "../css/ProductListFilter.css";
import LoadingScreen from "../components/LoadingScreen";

const ProductListFilter = ({
  categories,
  selectedCats,
  selectCat,
  filterClose,
  isVisible
}) => {
  let categoryList = categories.map(category => {
    let selectedBtn = selectedCats.has(category) ? "on-btn" : "off-btn";

    return (
      <div className="line-container filter" key={category}>
        <h2>{category}</h2>
        <div
          className={`on-off-btn ${selectedBtn}`}
          onClick={selectCat}
          id={category}
        />
      </div>
    );
  });

  console.log('prfil')
  return categoryList.length ? (
    <div
      className={`outer-container z10 ${
        isVisible === 1 ? "slide-up" : "slide-out"
      }`}
    >
      <div className="menu">
        <a className="space" id="filterVisible" onClick={filterClose}>
          <h2> Close </h2>
        </a>
      </div>
      <div className="inner-container inner-padding">
        <h2> Type </h2>
        {categoryList}
        <div className="bottom-spacing" />
      </div>
    </div>
  ) : (
    <LoadingScreen />
  );
};

export default ProductListFilter;
