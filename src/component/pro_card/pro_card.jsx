import React, { useState } from "react";
import "./pro_card.css";
import rackData from "../../data/rack.json";
import benchData from "../../data/bench.json";
import barWeightData from "../../data/bar_weight.json";
import specialtyData from "../../data/specialty.json";
import Card from "../rackpage/cards"; // Import the Card component from rackpage

export default function ProCard() {
  const [visibleCount, setVisibleCount] = useState(4);

  // Combine data from all files (2 items from each)
  const bestSellerData = [
    ...rackData.slice(0, 2),
    ...benchData.slice(0, 2),
    ...barWeightData.slice(0, 2),
    ...specialtyData.slice(0, 2),
  ];

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, bestSellerData.length));
  };

  return (
    <div className="pro-card">
      <h3 className="pro-card__title">Best Seller</h3>
      <div className="pro-card__container">
        {bestSellerData.slice(0, visibleCount).map((item, index) => (
          <Card key={index} item={item} /> // Use the Card component
        ))}
      </div>
      {visibleCount < bestSellerData.length && (
        <button className="pro-card__toggle mb-3" onClick={showMore}>
          Show More
        </button>
      )}
    </div>
  );
}