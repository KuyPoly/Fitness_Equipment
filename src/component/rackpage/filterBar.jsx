import React from "react";
import "./filterBar.css";

export default function FilterBar({ onCategoryChange, activeCategory }) {
    const buttons = [
        { name: "Shop All Racks", category: "all" },
        { name: "T-2 Series", category: "T-2 Series" },
        { name: "T-3 Series", category: "T-3 Series" },
        { name: "X-3 Series", category: "X-3 Series" },
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