import { useEffect, useState } from 'react';

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
      if (direction === 'forward') {
        setHue((prev) =>
          prev + speed > 360 ? prev + speed - 360 : prev + speed
        );
      } else if (direction === 'backward') {
        setHue((prev) =>
          prev - speed < 0 ? 360 + (prev - speed) : prev - speed
        );
      }
    }, 34);
    return () => {
      clearInterval(interval);
    };
  }, [direction, speed]);

  return `hsl(${hue},${sat}%,${lum}%)`;
};
export default useHslCycle;
