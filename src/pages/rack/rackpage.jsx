import React, { useState } from "react";
import "./rackpage.css";
import FilterBar from "../../component/rackpage/filterBar";
import rackData from "../../data/rack.json";
import Card from "../../component/rackpage/cards";
import Footer from '../../component/footer/footer';

export default function Rackpage() {
    const [category, setCategory] = useState("all"); // State to track the selected category
    const [visibleCount, setVisibleCount] = useState(16); // State to track the number of visible items

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory); // Update the category when a button is clicked
        setVisibleCount(16); // Reset visible count when category changes
    };

    // Filter products based on the selected category
    const filteredData =
        category === "all"
            ? rackData
            : rackData.filter((item) => item.category === category);

    // Limit the number of visible items
    const visibleData = filteredData.slice(0, visibleCount);

    const toggleExpand = () => {
        setVisibleCount(filteredData.length); // Show all items when "See More" is clicked
    };

    return (
        <div className="rackpage">
            <h4 className="title">Gym Racks</h4>
            <h6 className="desc">Power Racks, Cages, Squat Stands & More</h6>
            <div className="desc__text">
            Take your strength training to the next level with Titan Fitness's robust selection of squat racks. 
            Perfect for both home gyms and commercial spaces, our gym racks provide a stable and secure foundation 
            for your weightlifting routine. Whether you're a beginner or a seasoned athlete, our racks are designed 
            to support your goals, offering versatility, safety, and durability. 
            </div>
            <FilterBar onCategoryChange={handleCategoryChange} activeCategory={category} />
            <div className="rack-items">
                {visibleData.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
            {filteredData.length > 16 && (
                <button
                    className="rack-item__toggle"
                    onClick={toggleExpand}
                >
                    See More
                </button>
            )}
            <Footer />
        </div>
        
    );
}