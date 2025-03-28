import React from 'react';
import './photos.css';

function Photos() {
  return (
    <div className="photos-container">
      <h1>Photos</h1>
      <p>Here are some lovely memories and photos to enjoy!</p>
      {/* Add some images or photo-related content here */}
      <div className="photo-gallery">
        <img src="https://via.placeholder.com/300" alt="Placeholder 1" className="photo-item" />
        <img src="https://via.placeholder.com/300" alt="Placeholder 2" className="photo-item" />
        <img src="https://via.placeholder.com/300" alt="Placeholder 3" className="photo-item" />
      </div>
    </div>
  );
}

export default Photos;
