import React from "react";
import { Link } from "react-router-dom";
import "./rackpage.css";
import FilterBar from "./filterBar"; // Import the FilterBar component
import rackData from "../../data/rack.json"; // Example JSON data for racks

export default function Rackpage() {
    return (
        <div className="rackpage">
            <h4 className="title">Accessories</h4>
            <h6 className="desc">Enhance Your Workout with High-Quality Gym Accessories</h6>
            <div className="desc__text">Take your fitness routine to the next level with premium gym accessories. 
                Whether you're improving grip strength, boosting recovery,
                 or making your workouts more efficient, we’ve got the right 
                 gear for you. From weightlifting belts and resistance bands to smart hydration solutions, 
                 explore top-quality accessories designed for performance and durability.
            </div>
            <FilterBar/> {/* Include the FilterBar component here */}

            {/* Render the rack data */}
            <div className="rack-items">
                {rackData.map((item, index) => (
                    <div key={index} className="rack-item">
                        <img src={item.image} alt={item.name} className="rack-item__image" />
                        <div className="rack-item__header">
                            <h5 className="rack-item__name">{item.name}</h5>
                            <Link to="/cart" className="basket-icon">
                                    🛒 {/* Basket icon wrapped in a Link */}
                                </Link>
                        </div>
                            <div className="rack-item__price">{item.price}</div>
                            <div className="rack-item__rating">
                                ⭐⭐⭐⭐⭐ {/* Example static 5-star rating */}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}