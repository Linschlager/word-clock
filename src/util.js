import { useEffect, useState } from "react";

// Generates an array containing values from start to start+size
export const rangeFrom = (size, start = 0) => {
  const arr = [];
  for (let i = start; i < size + start; i++) {
    arr.push(i);
  }
  return arr;
};

export const useTime = () => {
  const dt = new Date(); // Default DateTime
  const [time, setTime] = useState([dt.getHours(), dt.getMinutes()]); // Initial time
  useEffect(() => {
    const fn = () => {
      const now = new Date(); // New DateTime
      setTime([now.getHours(), now.getMinutes()]); // Update hours and minutes
    };
    const to = setTimeout(fn, 1000); // Update Time every second
    return () => clearTimeout(to); // Cleanup Block
  });
  return time;
};

/**
 * Loops through all possible states, a minute per second
 */
export const useDemoTime = () => {
  const [time, setTime] = useState([1, 0]);
  useEffect(() => {
    const fn = () => {
      if (time[1] + 1 >= 60) {
        setTime([time[0] + 1, 0]);
      } else {
        setTime([time[0], time[1] + 1]);
      }
    };
    const to = setTimeout(fn, 50); // Update Time every half second
    return () => clearTimeout(to);
  });
  return time;
};
