import React, { useState } from "react";
import "./payment.css";
import moneyImage from "../../assets/money.png"; // Adjust the path if necessary
import Footer from "../../component/footer/footer";

export default function Payment() {
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentClick = (method) => {
    setPaymentMethod(method);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPaymentMethod("");
  };

  const handleConfirmPayment = () => {
    alert(`Payment confirmed using ${paymentMethod}`);
    setShowModal(false);
  };

  return (
    <div>
        <div className="payment-page">
        <h2 className="payment-title">PAYMENT METHOD</h2>
        <div className="payment-container">
            {/* Left Section: Payment Form */}
            <div className="payment-form">
            <h3 className="form-title">Payment Details</h3>
            <form>
                <div className="form-group">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Number" />
                </div>
                <div className="form-group">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="ZIP" />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Country" />
                </div>
            </form>
            <h3 className="form-title mt-4">Available Payment Methods</h3>
            <div className="payment-methods">
                <button
                className="payment-button"
                onClick={() => handlePaymentClick("Credit Card")}
                >
                <i className="bi bi-credit-card"></i> Credit Card
                </button>
                <button
                className="payment-button"
                onClick={() => handlePaymentClick("PayPal")}
                >
                <i className="bi bi-paypal"></i> PayPal
                </button>
            </div>
            </div>

            {/* Right Section: Image */}
            <div className="payment-image">
            <img src={moneyImage} alt="Money" />
            </div>
        </div>

        {/* Payment Modal */}
        {showModal && (
            <div className="payment-modal">
            <div className="modal-content">
                <h3>Enter {paymentMethod} Details</h3>
                <form>
                <div className="form-group">
                    <input type="text" placeholder="Card Number" required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Cardholder Name" required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Expiry Date (MM/YY)" required />
                    <input type="text" placeholder="CVV" required />
                </div>
                </form>
                <div className="modal-buttons">
                <button className="confirm-button" onClick={handleConfirmPayment}>
                    Confirm Payment
                </button>
                <button className="cancel-button" onClick={handleCloseModal}>
                    Cancel
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
        <Footer />
    </div>
  );
}