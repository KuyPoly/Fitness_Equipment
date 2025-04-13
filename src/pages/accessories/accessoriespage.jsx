import React, { useState } from "react";
import "./accessoriespage.css";
import FilterBar from "../../component/Accessories/filterbar";
import accessoriesData from "../../data/accessories.json";
import Card from "../../component/Accessories/cards";
import Footer from "../../component/footer/footer"; // Import the Footer component

export default function AccessoriesPage() {
    const [category, setCategory] = useState("all"); // State to track the selected category
    const [visibleCount, setVisibleCount] = useState(16); // State to track the number of visible items

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory); // Update the category when a button is clicked
        setVisibleCount(16); // Reset visible count when category changes
    };

    // Filter products based on the selected category
    const filteredData =
        category === "all"
            ? accessoriesData
            : accessoriesData.filter((item) => item.category === category);

    // Limit the number of visible items
    const visibleData = filteredData.slice(0, visibleCount);

    const toggleExpand = () => {
        setVisibleCount(filteredData.length); // Show all items when "See More" is clicked
    };

    return (
        <div className="accessories-page">
            <h4 className="title">Accessories</h4>
            <h6 className="desc">Enhance Your Workout with High-Quality Gym Accessories</h6>
            <div className="desc__text">
            Take your fitness routine to the next level with premium gym accessories. Whether you're improving grip strength, boosting recovery, or making your workouts more efficient, we’ve got the right gear for you. From weightlifting belts and resistance bands to smart hydration solutions, explore top-quality accessories designed for performance and durability.
            </div>
            <FilterBar onCategoryChange={handleCategoryChange} activeCategory={category} />
            <div className="accessory-items">
                {visibleData.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
            {filteredData.length > 16 && (
                <button
                    className="accessory-item__toggle"
                    onClick={toggleExpand}
                >
                    See More
                </button>
            )}
            <Footer /> {/* Include the Footer component here */}
        </div>
    );
}