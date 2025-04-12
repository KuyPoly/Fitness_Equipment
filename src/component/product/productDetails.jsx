// src/components/ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <section className="product-highlight">
      <div className="highlight-left">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="highlight-right">
        <h1>{product.name}</h1>
        <h2>{product.tagline}</h2>
        <p className="description">{product.description}</p>
        <p><strong>Dimensions (L x W x H):</strong> {product.dimensions}</p>
        <p><strong>Weight:</strong> {product.weight}</p>
        <p className="price"><strong>Price:</strong> {product.price}</p>
        <div className="product-buttons">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
