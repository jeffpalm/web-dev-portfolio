export default (
  input: number,
  minInput: number,
  maxInput: number,
  hueStart: number = 0
) => {
  const inputRange = maxInput - minInput;
  const inputProgress = input - minInput;
  const inputPercentile = inputProgress / inputRange;

  const rangeProgress =
    inputProgress === 0 ? inputProgress : inputPercentile * 360;

  if (hueStart + rangeProgress > 360) {
    return Math.floor(hueStart + rangeProgress - 360);
  }
  return Math.floor(hueStart + rangeProgress);
};
