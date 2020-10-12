import { useState, useEffect } from 'react';

const useRgbCycle = (speed = 1, r, g, b) => {
  const [rgb, setRgb] = useState({
    r: r || 0,
    g: g || 254,
    b: b || 150
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let { r, g, b } = rgb;
      if (r > 0 && b === 0) {
        setRgb({
          r: r - speed < 0 ? 255 + (r - speed) : r - speed,
          g: g + speed > 255 ? 0 : g + speed,
          b
        });
      }
      if (g > 0 && r === 0) {
        setRgb({
          g: g - speed < 0 ? 255 + (g - speed) : g - speed,
          b: b + speed > 255 ? 0 : b + speed,
          r
        });
      }
      if (b > 0 && g === 0) {
        setRgb({
          r: r + speed > 255 ? 0 : r + speed,
          b: b - speed < 0 ? 255 + (b - speed) : b - speed,
          g
        });
      }
    }, 17);
    return () => {
      clearInterval(interval);
    };
  }, [rgb, speed]);

  return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
};

export default useRgbCycle;
