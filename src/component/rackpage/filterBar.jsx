import React from "react";
import "./filterBar.css"; // Import the CSS file for styling
export default function FilterBar() {
    const buttons = [
        "Shop All Accessories",
        "Gym Apparel",
        "Head wear & Accessories",
        "Footer & Stock",
        "Gym Bags",
        "Filter & Sort"
      ];

      return (
        <section className="px-6 py-4">
          <div className="flex flex-wrap button">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className="text-white px-3 py-1 font-bold bg-yellow border"
              >
                {btn}
              </button>
            ))}
          </div>
        </section>
      );
}