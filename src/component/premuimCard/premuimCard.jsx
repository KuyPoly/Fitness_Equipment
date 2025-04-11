import React from "react";
import "./premuimCard.css";
import { Link } from "react-router-dom";

export default function PremiumCard({ name, link, pic }) {
    return (
        <div
            className="premium-card"
            style={{ backgroundImage: `url(${pic})` }}
        >
            <div className="premium-card__content">
                <h5>{name}</h5>
                <Link to={link} className="premium-card__link">
                    Shop now &gt;
                </Link>
            </div>
        </div>
    );
}