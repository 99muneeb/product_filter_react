import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import fetchProducts from './data';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await items();
      setMenuItems(data);
      setCategories(['all', ...new Set(data.map((item) => item.category))]);
    };
    fetchData();
  }, []);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const filterItems = (category) => {
    if (category === 'all') {
      setProducts(menuItems);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    setProducts(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu products={products} />
      </section>
    </main>
  );
}

export default App;
