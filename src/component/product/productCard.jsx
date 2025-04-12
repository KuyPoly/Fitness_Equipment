import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.name}`} className="card"> {/* Wrap the entire card in a Link */}
      <img src={product.image} alt={product.name} />
      <p className="product-name">{product.name}</p>
      <p className="price">{product.price}</p>
      <div className="rating">⭐⭐⭐⭐⭐</div>
    </Link>
  );
};

export default ProductCard;