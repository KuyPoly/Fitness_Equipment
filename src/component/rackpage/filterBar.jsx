import React from "react";
import "./filterBar.css";

export default function FilterBar({ onCategoryChange, activeCategory }) {
    const buttons = [
        { name: "Shop All Accessories", category: "all" },
        { name: "Gym Apparel", category: "apparel" },
        { name: "Head wear & Accessories", category: "headwear" },
        { name: "Footer & Stock", category: "footer" },
        { name: "Gym Bags", category: "bags" },
    ];

    return (
        <section className="px-6 py-4">
            <div className="flex flex-wrap button">
                {buttons.map((btn, i) => (
                    <button
                        key={i}
                        className={`text-black px-3 py-1 font-bold border ${
                            activeCategory === btn.category ? "bg-yellow" : "bg-gray"
                        }`}
                        onClick={() => onCategoryChange(btn.category)} // Pass the category to the parent
                    >
                        {btn.name}
                    </button>
                ))}
            </div>
        </section>
    );
}