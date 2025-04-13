import React, { useState } from "react";
import "./specialtyPage.css";
import specialtyData from "../../data/specialty.json";
import Card from "../../component/rackpage/cards";
import Footer from "../../component/footer/footer";

export default function SpecialtyPage() {
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(16);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setVisibleCount(16);
  };

  const filteredData =
    category === "all"
      ? specialtyData
      : specialtyData.filter((item) => item.category === category);

  const visibleData = filteredData.slice(0, visibleCount);

  const toggleExpand = () => {
    setVisibleCount((prevCount) =>
      prevCount === filteredData.length ? 16 : filteredData.length
    );
  };

  return (
    <div className="specialty-page">
      <h4 className="title">Specialty Machines</h4>
      <h6 className="desc">
        Enhance Your Workout with High-Quality Specialty Machines
      </h6>
      <div className="desc__text">
        Take your fitness routine to the next level with premium specialty
        machines. Whether you're improving strength, endurance, or flexibility,
        we've got the right equipment for you. From treadmills and cable
        machines to rowers, explore top-quality machines designed for
        performance and durability.
      </div>

      {/* Updated Filter Bar */}
      <div className="filter-bar">
        <button
          className={`filter-button ${category === "all" ? "active" : ""}`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        <button
          className={`filter-button ${category === "Cardio" ? "active" : ""}`}
          onClick={() => handleCategoryChange("Cardio")}
        >
          Cardio
        </button>
        <button
          className={`filter-button ${category === "Strength" ? "active" : ""}`}
          onClick={() => handleCategoryChange("Strength")}
        >
          Strength
        </button>
      </div>

      <div className="specialty-items">
        {visibleData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {filteredData.length > 16 && (
        <button className="specialty-item__toggle" onClick={toggleExpand}>
          {visibleCount === filteredData.length ? "See Less" : "See More"}
        </button>
      )}

      <Footer />
    </div>
  );
}