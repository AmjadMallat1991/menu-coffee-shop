import React from 'react';
import MenuItem from './MenuItem';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="items">
        {category.items.map(item => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
