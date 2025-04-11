import React from 'react';
import './productPage.css';
import specialtyData from '../../data/specialty.json'; // Example JSON data for specialty machines

const ProductPage = () => {
  const product = specialtyData[0]; // Using the first product as an example

  return (
    <div className="product-page">
      <header className="product-header">
        <h1>PowerFitness</h1>
        <nav>
          <ul>
            <li>Racks</li>
            <li>Bench</li>
            <li>Bar&Weight</li>
            <li>Specialty Machines</li>
            <li>Accessories</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <main className="product-main">
        <section className="product-highlight">
          <img src={product.image} alt={product.name} />
          <div className="product-info">
            <h2>{product.name}</h2>
            <h3>{product.tagline}</h3>
            <p>{product.description}</p>
            <p><strong>Dimensions:</strong> {product.dimensions}</p>
            <p><strong>Weight:</strong> {product.weight}</p>
            <div className="product-buttons">
              <button>Buy Now</button>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>

        <section className="recently-viewed">
          <h3>Recently Viewed</h3>
          <div className="recently-viewed-cards">
            {specialtyData.slice(1, 4).map((item, index) => (
              <div className="card" key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.tagline}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="best-seller">
          <h3>Best Seller</h3>
          <div className="best-seller-cards">
            {specialtyData.slice(4, 7).map((item, index) => (
              <div className="card" key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.tagline}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="product-footer">
        <div>
          <h4>Payment & Shipping</h4>
          <p>Payment Method</p>
        </div>
        <div>
          <h4>Customer Service</h4>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>Account</h4>
          <p>Sign In</p>
          <p>Profile</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;