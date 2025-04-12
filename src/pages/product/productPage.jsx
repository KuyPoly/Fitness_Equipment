import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import './productPage.css';

import rackData from '../../data/rack.json';
import benchData from '../../data/bench.json';
import specialtyData from '../../data/specialty.json';
import barWeightData from '../../data/bar_weight.json';

import ProductDetails from '../../component/product/productDetails'; // Corrected path
import ProductCard from '../../component/product/productCard'; // Corrected path
import Footer from '../../component/footer/footer'; // Import Footer

const ProductPage = ({ cart, setCart }) => {
  const { name } = useParams();
  const allData = [...rackData, ...benchData, ...specialtyData, ...barWeightData];
  const product = allData.find((item) => item.name === name);

  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Track the current product as recently viewed
  useEffect(() => {
    if (product) {
      const storedProducts = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
      const updatedProducts = [product, ...storedProducts.filter((p) => p.name !== product.name)];
      localStorage.setItem('recentlyViewed', JSON.stringify(updatedProducts.slice(0, 5))); // Limit to 5 items
      setRecentlyViewed(updatedProducts.slice(0, 5));
    }
  }, [product]);

  const bestSellers = useMemo(() => {
    return [...allData].sort(() => 0.5 - Math.random()).slice(0, 5);
  }, [allData]);

  if (!product) {
    return (
      <div className="product-page">
        <h2 style={{ color: 'red' }}>Product not found.</h2>
      </div>
    );
  }

  return (
    <div className="product-page">
      <main className="product-main">
      <ProductDetails product={product} cart={cart} setCart={setCart} />

        <section className="section">
          <h3>Recently Viewed</h3>
          <div className="card-container">
            {recentlyViewed.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        </section>

        <section className="section">
          <h3>Best Seller</h3>
          <div className="card-container">
            {bestSellers.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;