import { useState, useEffect } from 'react';

const useHslCycle = (
  speed = 1,
  start = 0,
  direction = 'forward',
  sat = 100,
  lum = 50
) => {
  const [hue, setHue] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (direction) {
        case 'forward':
          if (hue + speed > 360) {
            setHue(hue + speed - 360);
          } else {
            setHue(hue + speed);
          }
          break;
        case 'backward':
          if (hue - speed < 0) {
            setHue(360 + (hue - speed));
          } else {
            setHue(hue - speed);
          }
          break;
        default:
          break;
      }
    }, 34);
    return () => {
      clearInterval(interval);
    };
  }, [direction, hue, speed]);
  // }, [])

  return `hsl(${hue},${sat}%,${lum}%)`;
};

export default useHslCycle;
