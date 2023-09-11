import React, { useState } from 'react';
import "../styles/PaymentPage.css";
import { useNavigate } from 'react-router';

const PaymentPage = () => {
  const [selectedBillingOption, setSelectedBillingOption] = useState("yearly");

  const handleBillingOptionChange = (option) => {
    setSelectedBillingOption(option);
    console.log(selectedBillingOption);
  }
  const navigate = useNavigate();
  const handleSubscribe = () => {
    navigate('/paymentstatus')
  }
  return (
    <div className='payment-container'>
        <div className='payment-container-side1'>
            <h3>Select billing cycle</h3>
            <div className='side1-box1'>
              <input 
                type='radio'
                checked={selectedBillingOption === 'yearly'}
                onChange={() => handleBillingOptionChange('yearly')}
              />
              <div className='payment-billing-details'>
                <h4>Yearly billing</h4>
                <h5>$99, that's $8.25/month</h5>
              </div>
              <h6 className='payment-discount'>48% YEARLY DISCOUNT</h6>
            </div>
            <div className='side1-box2'>
              <input 
                type='radio'
                checked={selectedBillingOption === 'monthly'}
                onChange={() => handleBillingOptionChange('monthly')}
              />
              <div className='payment-billing-details'>
                <h4>Monthly billing</h4>
                <h5>$16/month</h5>
              </div>
              <h6></h6>
            </div>
        </div>
        <div className='payment-container-side2'>
            <h3>2. Review your purchase</h3>
            <div className='sidebox2-headings'>
              <div className='sidebox2-head1'>
                <h4>Next Pro</h4>
              </div>
              <button className='changePlanBtn'>Change plan</button>
            </div>
            <div className='total-billing-details'>
              <div className='billing-all-content'>
                <div className='billing total-price'>
                  <h5>Total</h5>
                  <h5>${selectedBillingOption === "yearly" ? "99" : "16"}</h5>
                </div>
                <div className='billing biling-cycle-category'>
                  <h5>Billing cycle</h5>
                  <h5>${selectedBillingOption === "yearly" ? "Yearly" : "Monthly"}</h5>
                </div>
                <div className='billing-cycle-details'>
                  Subscription will automatically renew at ${selectedBillingOption === "yearly" ? "144" : "16"} every year, starting Sep 4, 2024, unless you cancel before the day of your next renewal in your subscription settings.
                </div>
                <div className='billing-cycle-currencyname'>All prices in USD</div>
              </div>
            </div>
            <button className='buyBtn' onClick={handleSubscribe}>Buy subscription</button>
        </div>
    </div>
  )
}

export default PaymentPage;
