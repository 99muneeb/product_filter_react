import React, { useState } from 'react';

const Categories = ({ categories, filterItems }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleClick = (category) => {
    setActiveCategory(category);
    filterItems(category);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        const btnClasses = category === activeCategory ? 'filter-btn active' : 'filter-btn';

        return (
          <button type="button" className={btnClasses} key={index} onClick={() => handleClick(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
