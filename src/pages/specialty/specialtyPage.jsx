import React, { useState } from "react";
import "./specialtyPage.css";
import specialtyData from "../../data/specialty.json";
import Card from "../../component/rackpage/cards";

export default function SpecialtyPage() {
  const [visibleCount, setVisibleCount] = useState(16); // State to track the number of visible items
  const [isExpanded, setIsExpanded] = useState(false); // State to track if "See More" is clicked

  // Limit the number of visible items
  const visibleData = isExpanded ? specialtyData : specialtyData.slice(0, visibleCount);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Toggle between expanded and collapsed states
  };

  return (
    <div className="specialty-page">
      <h4 className="title">Specialty Machines</h4>
      <h6 className="desc">Explore advanced specialty machines designed for professional and home gyms.</h6>
      <div className="desc__text">
        Discover a wide range of specialty machines tailored to meet the needs of fitness enthusiasts and professionals alike. From treadmills to cable machines, our collection offers innovative designs and cutting-edge technology to enhance your workout experience.
      </div>
      <div className="specialty-items">
        {visibleData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      {specialtyData.length > 16 && (
        <button
          className="specialty-item__toggle"
          onClick={toggleExpand}
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
}