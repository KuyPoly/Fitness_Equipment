import React, { useState } from "react";
import "./rackpage.css";
import FilterBar from "../../component/rackpage/filterBar";
import rackData from "../../data/rack.json";
import Card from "../../component/rackpage/cards"; // Import the Card component

export default function Rackpage() {
    const [visibleCount, setVisibleCount] = useState(16);

    const toggleExpand = () => {
        setVisibleCount((prev) => (prev === 16 ? rackData.length : 16));
    };

    return (
        <div className="rackpage">
            <h4 className="title">Accessories</h4>
            <h6 className="desc">Enhance Your Workout with High-Quality Gym Accessories</h6>
            <div className="desc__text">
                Take your fitness routine to the next level with premium gym accessories. 
                Whether you're improving grip strength, boosting recovery,
                or making your workouts more efficient, we’ve got the right 
                gear for you. From weightlifting belts and resistance bands to smart hydration solutions, 
                explore top-quality accessories designed for performance and durability.
            </div>
            <FilterBar />
            <div className="rack-items">
                {rackData.slice(0, visibleCount).map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
            <button
                className="rack-item__toggle"
                onClick={toggleExpand}
            >
                {visibleCount === 4 ? "See More" : "See Less"}
            </button>
        </div>
        
    );
}