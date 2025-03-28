import React, { useState } from 'react';
import styles from './envelope.module.css';

const Envelope = () => {
  const [flap, setFlap] = useState(false);

  const toggleFlap = () => {
    setFlap(!flap);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles['envelope-wrapper']} ${flap ? styles.flap : ''}`} onClick={toggleFlap}>
        <div className={styles.envelope}>
          <div className={styles.letter}>
            <div className={styles.text}>
              <strong>
                Dear sister,
              </strong>
              <p>
              Happy Birthday! 🎉 Wishing you a year filled with Love ❤️, Laughter, and Endless Care 💕. May your day be as special as you are!
              </p>
              <p className={styles.sincerely}>
                Sincerely, Saket
              </p>
            </div>
            
          </div>
        </div>
        <div className={styles.heart}></div>
        {/* Continue Button inside the letter */}
      </div>
    </div>
  );
};

export default Envelope;