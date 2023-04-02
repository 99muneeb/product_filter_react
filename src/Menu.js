import React from 'react';

const Menu = ({ products }) => {
  return (
    <div className="section-center">
      {products.map((product) => {
        const { id, title, image, description, price } = product;
        return (
          <article key={id} className="menu-item">
            <img src={image} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">RS {price}</h4>
              </header>
              <p className="item-text">{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;