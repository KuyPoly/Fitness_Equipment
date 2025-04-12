import React, { useEffect } from 'react';
import './popup.css';

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Automatically close the popup after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onClose]);

  return (
    <div className="popup">
      <p>{message}</p>
    </div>
  );
};

export default Popup;