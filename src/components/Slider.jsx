// Slider.js

import React, { useState, useEffect } from 'react';
import './Slider.css';

const slidesData = [
  { id: 1, title: 'Slide 1', content: 'Content for Slide 1' },
  { id: 2, title: 'Slide 2', content: 'Content for Slide 2' },
  // Add more slides as needed
];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlideIndex ? 'active' : ''}`}
        >
          <h2>{slide.title}</h2>
          <p>{slide.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;
