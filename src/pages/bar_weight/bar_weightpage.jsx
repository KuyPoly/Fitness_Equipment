import React, { useState } from "react";
import "./bar_weightpage.css";
import barWeightData from "../../data/bar_weight.json"; 
import Card from "../../component/rackpage/cards";
import Footer from "../../component/footer/footer";

export default function BarWeightPage() {
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(16);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setVisibleCount(16);
  };

  const filteredData =
    category === "all"
      ? barWeightData
      : barWeightData.filter((item) => item.category === category);

  const visibleData = filteredData.slice(0, visibleCount);

  const toggleExpand = () => {
    setVisibleCount((prevCount) =>
      prevCount === filteredData.length ? 16 : filteredData.length
    );
  };

  return (
    <div className="bar-weight-page">
      <h4 className="title">Bar Weights</h4>
      <h6 className="desc">Find the Perfect Bar Weights for Your Workout</h6>
      <div className="desc__text">
        Explore our collection of high-quality bar weights designed to enhance
        your strength training. Whether you're a beginner or a pro, we have the
        right equipment for you.
      </div>

      <div className="filter-bar">
        <button
          className={`filter-button ${category === "all" ? "active" : ""}`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={`filter-button ${category === "Olympic" ? "active" : ""}`}
          onClick={() => handleCategoryChange("Olympic")}
        >
          Olympic
        </button>
        <button
          className={`filter-button ${category === "Standard" ? "active" : ""}`}
          onClick={() => handleCategoryChange("Standard")}
        >
          Standard
        </button>
      </div>

      <div className="bar-weight-items">
        {visibleData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {filteredData.length > 16 && (
        <button className="bar-weight-item__toggle" onClick={toggleExpand}>
          {visibleCount === filteredData.length ? "See Less" : "See More"}
        </button>
      )}

      <Footer />
    </div>
  );
}