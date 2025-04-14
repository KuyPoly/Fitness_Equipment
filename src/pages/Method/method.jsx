import React from "react";
import "./method.css";

export default function Method() {
    return (
        <div className="method-page">
        <h2 className="method-title text-white">Payment Method</h2>
        <div className="method-container">
            <div className="method-card ">
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuEI6llRz67BfxHf09O4ulr3VxaGMPMV4Bmv7qYx4e0UEi2DBJVVAScagp2HVaLPP4ZU&usqp=CAU" alt="Credit Card" />
            <h4 className="text-white">Credit Card</h4>
            <p className="text-white">Pay securely using your credit card.</p>
            </div>
            <div className="method-card">
            <img className="image" src="https://images.ctfassets.net/drk57q8lctrm/21FLkQ2lbOCWynXsDZvXO5/485a163f199ef7749b914e54d4dc3335/paypal-logo.webp" alt="PayPal" />
            <h4 className="text-white">PayPal</h4>
            <p className="text-white">Use your PayPal account for quick payments.</p>
            </div>
            {/* Add more payment methods as needed */}
        </div>
        </div>
    );
}