import { useEffect, useState } from 'react';

const useHueConversion = (input, minInput, maxInput, hueStart = 0) => {
  const [output, setOutput] = useState(hueStart);

  useEffect(() => {
    const adjustOutput = () => {
      const { floor } = Math;
      const inputRange = maxInput - minInput;
      const inputProgress = input - minInput;
      const inputPercentile = inputProgress / inputRange;

      const rangeProgress =
        inputProgress === 0 ? inputProgress : inputPercentile * 360;

      if (hueStart + rangeProgress > 360) {
        return floor(hueStart + rangeProgress - 360);
      }
      return floor(hueStart + rangeProgress);
    };

    setOutput(adjustOutput());
  }, [input, hueStart, maxInput, minInput]);

  return output;
};

export default useHueConversion;
