import React, { useState } from 'react';
import './Test.css'; // Importing CSS for styling

const Test = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`app ${isVisible ? 'blur' : ''}`}>
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        Hover Me
      </button>
      {isVisible && (
        <div className="popup-div"></div>
      )}
    </div>
  );
};

export default Test;
