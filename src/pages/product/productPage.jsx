import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './productPage.css';

import rackData from '../../data/rack.json';
import benchData from '../../data/bench.json';
import specialtyData from '../../data/specialty.json';
import barWeightData from '../../data/bar_weight.json';

import ProductDetails from '../../component/product/productDetails'; // Corrected path
import ProductCard from '../../component/product/productCard'; // Corrected path

const ProductPage = () => {
  const { name } = useParams();
  const allData = [...rackData, ...benchData, ...specialtyData, ...barWeightData];
  const product = allData.find((item) => item.name === name);

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
        <ProductDetails product={product} />

        <section className="section">
          <h3>Recently View</h3>
          <div className="card-container">
            {allData.slice(0, 3).map((item, index) => (
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
    </div>
  );
};

export default ProductPage;