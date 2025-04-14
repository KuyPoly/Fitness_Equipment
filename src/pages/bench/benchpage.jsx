import React, { useState } from "react";
import "./benchpage.css";
import benchData from "../../data/bench.json"; // Ensure this file exists
import Card from "../../component/rackpage/cards"; // Reuse the Card component
import Footer from "../../component/footer/footer";

export default function BenchPage() {
    const [category, setCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(16);

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setVisibleCount(16);
    };

    const filteredData =
        category === "all"
            ? benchData
            : benchData.filter((item) => item.category === category);

    const visibleData = filteredData.slice(0, visibleCount);

    const toggleExpand = () => {
        setVisibleCount((prevCount) =>
            prevCount === filteredData.length ? 16 : filteredData.length
        );
    };

    return (
        <div className="bench-page">
            <h4 className="title">Benches</h4>
            <h6 className="desc">Adjustable, Flat, and Utility Benches</h6>
            <div className="desc__text">
                Explore our premium selection of benches designed for strength training and versatility. Whether you're looking for adjustable, flat, or utility benches, our collection offers durability and performance for all fitness levels.
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
                <button
                    className={`filter-button ${category === "all" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("all")}
                >
                    All
                </button>
                <button
                    className={`filter-button ${category === "flat bench" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("flat bench")}
                >
                    Flat
                </button>
                <button
                    className={`filter-button ${category === "adjustable bench" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("adjustable bench")}
                >
                    Adjustable
                </button>
                <button
                    className={`filter-button ${category === "utility bench" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("utility bench")}
                >
                    Utility
                </button>
            </div>

            <div className="bench-items">
                {visibleData.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>

            {filteredData.length > 16 && (
                <button className="bench-item__toggle" onClick={toggleExpand}>
                    {visibleCount === filteredData.length ? "See Less" : "See More"}
                </button>
            )}

            <Footer />
        </div>
    );
}