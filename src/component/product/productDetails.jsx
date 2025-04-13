import React, { useState } from 'react';
import Popup from '../cart/popup';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product, cart, setCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const addToCart = () => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.name === product.name);
        if (existingProduct) {
          return prevCart.map((item) =>
              item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });

      setShowPopup(true);
    };

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
          <button className="buy-now" onClick={() => navigate('/payment')}>Buy Now</button>
          <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
      {showPopup && <Popup message="Product added to cart!" onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default ProductDetails;