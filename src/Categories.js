import React from 'react';

export const Categories = ({ FilterMenu, category }) => {
  return (
    <div className='btn-container'>
      {category.map((cat, index) => {
        return (
          <button
            key={index}
            className='filter-btn'
            onClick={() => FilterMenu(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
