import React, { useState, useEffect } from 'react';
import '../styles/Popup.css';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [showPopup]);

  return (
    <div className={`popup ${showPopup ? 'show' : ''}`}>
      <div className="popup-content">Successfully Subscribed</div>
    </div>
  );
}

export default Popup;
