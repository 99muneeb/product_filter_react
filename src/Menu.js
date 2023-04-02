import React from 'react';

const Menu = ({ products }) => {
  return (
    <div className="section-center">
      {products.map((product) => {
        const { id, title, image, description, price ,rating  } = product;
        return (
          <article key={id} className="menu-item">
            <img src={image} alt={title} className="photo" />
            <div className="item-info">
              <header style={{display:'flex' ,flexDirection:'column' ,paddingBottom:'20px'}}>
                <h4>{title}</h4>
                <h4 className="price">RS {price}</h4>
                <h5>Rating: {rating.rate} <span className="price">({rating.count} reviews)</span></h5>
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