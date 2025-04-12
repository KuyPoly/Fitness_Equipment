import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

export default function Card({ item }) {
    return (
        <div className="rack-item">
            <Link to={`/product/${item.name}`}>
                <img src={item.image} alt={item.name} className="rack-item__image" />
            </Link>
            <div className="rack-item__header">
                <h5 className="rack-item__name">
                    <Link to={`/product/${item.name}`}>{item.name}</Link>
                </h5>
                <Link to="/cart" className="basket-icon">
                    🛒 {/* Basket icon wrapped in a Link */}
                </Link>
            </div>
            <div className="rack-item__price">{item.price}</div>
            <div className="rack-item__rating">⭐⭐⭐⭐⭐</div>
        </div>
    );
}