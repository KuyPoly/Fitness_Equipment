import React from 'react';
import { useNavigate } from 'react-router-dom';
import './cartPage.css';
import '../../component/footer/footer'
import Footer from '../../component/footer/footer';

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();
  // Update quantity of a product
  const updateQuantity = (product, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };



  // Remove a product from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity,
    0
  );

  return (
    <div>
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="cart-product">
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <div className="quantity-controls">
                        <button className="decrease-btn" onClick={() => updateQuantity(item, -1)}>-</button>
                        <span className="quantity-number">{item.quantity}</span>
                        <button className="increase-btn" onClick={() => updateQuantity(item, 1)}>+</button>
                      </div>
                    </td>
                    <td>${(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}</td>
                    <td>
                      <button className="delete-btn" onClick={() => removeFromCart(item)}>X</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="cart-summary">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <div className="cart-buttons">
              <button className="continue-shopping" onClick={() => navigate('/rackpage')}>Continue Shopping</button>
                  <button className="order-now" onClick={() => navigate('/payment') }>Order Now</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CartPage;