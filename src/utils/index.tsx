export const getFormattedTime = (milliSeconds: number): string => {
  let s = milliSeconds;
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const min = s;

  return (
    String(min).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0") +
    "." +
    String(ms).padStart(3, "0").substring(0, 2)
  );
};
