import React from "react";
import { Link } from "react-router-dom";
import "./rackpage.css";

export default function Rackpage() {
    return (
        <div className="rackpage">
            <h4 className="title">Accessories</h4>
            <h6 className="desc">Enhance Your Workout with High-Quality Gym Accessories</h6>
            <div className="desc__text">Take your fitness routine to the next level with premium gym accessories. 
                Whether you're improving grip strength, boosting recovery,
                 or making your workouts more efficient, we’ve got the right 
                 gear for you. From weightlifting belts and resistance bands to smart hydration solutions, 
                 explore top-quality accessories designed for performance and durability.
            </div>
            <Link to="/racks" className="btn btn-warning rounded-0 border border-dark mt-4">Shop Now</Link>
        </div>
    );
}