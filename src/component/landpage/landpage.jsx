import React from "react";
import { Link } from "react-router-dom";
import "./landpage.css";

export default function Landpage() {
    return (
        <div className="landpage">
            <div className="landpage__bg"></div>
            <div className="landpage__container">
                <h2>Ship over 900 home gym deals</h2>
                <h1 className="fst-italic text-uppercase">Pain is temporary, but pride is forever</h1>
                <Link to="/racks" className="btn btn-warning rounded-0 border border-dark mt-4">Shop Now</Link>
            </div>
        </div>
    );
}