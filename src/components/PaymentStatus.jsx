import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/PaymentStatus.css";

const PaymentStatus = () => {
  return (
    <div className="paymentstatus-wrapper">
        <div className="container payment-status-container">
            <div className="payment-success">
                <p>Payment Successful! Thankyou for Subscription.</p>
                <p>Visit again</p>
                <NavLink to="/home">
                <button>Home</button>
                </NavLink>
            </div>
        </div>
    </div>
  );
};

export default PaymentStatus;