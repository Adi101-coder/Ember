import React, { useEffect } from 'react';
import '../stylesheets/AnimatedBackground.css';

const NUM_STARS = 60;

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

const AnimatedBackground = () => {
  // Generate random star positions
  const stars = Array.from({ length: NUM_STARS }, (_, i) => ({
    left: `${getRandom(0, 100)}vw`,
    top: `${getRandom(0, 100)}vh`,
    size: getRandom(1, 2.5),
    delay: getRandom(0, 3),
    key: i,
  }));

  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-grid"></div>
      {stars.map(star => (
        <div
          className="star"
          key={star.key}
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground; 