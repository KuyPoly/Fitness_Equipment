import React from "react";
import "./wear.css";
import { Link } from "react-router-dom";
import wearImage from "../../assets/wear.png"; // Import the image

export default function Wear() {
    return (
        <div className="wear bg-warning">
            <div className="wear__container">
                <h1>Get your own wear</h1>
                <p>
                    Go for the most comfortable wear by bagging this gym wear. An everyday essential,
                    and comfortable, breathable, trendy, sweat-absorbing, and is composed of
                    high-quality materials. for you. A Relaxable fit!
                </p>
                <Link to="/accessories" className="btn btn-warning rounded-0 border border-dark mt-4">
                    Shop Now
                </Link>
            </div>
            <div className="wear__img-container">
                <img src={wearImage} alt="wear" className="wear__img" />
            </div>
        </div>
    );
}