import React, { useEffect, useState } from 'react';
import Envelope from './envelope/envelope';
import './birthdayWish.css';

function BirthdayWish() {
  const [messageVisible, setMessageVisible] = useState(false);

  // Trigger the message reveal after the envelope appears and "opens"
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageVisible(true);
    }, 3000); // The letter will "open" after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="birthday-wish-container">
      {/* Envelope component placed in the center */}
      <Envelope />
      <P>Demo</P>
    </div>
  );
}

export default BirthdayWish;
