import { rangeFrom as range } from "../util";

const letters = [
  "ESKESCHGFÜF".split(""),
  "VIERTUZFZÄÄ".split(""),
  "ZWÄNZGSIVOR".split(""),
  "ABOHAUBIEPM".split(""),
  "EISZWÖISDRÜ".split(""),
  "VIERINFÜFIV".split(""),
  "SÄCHSISEBNI".split(""),
  "ACHTIKNÜNIE".split(""),
  "ZÄNILDSELFI".split(""),
  "MZWÖUFITUHU".split("")
];

const base = [1, 2, 4, 5, 6, 7];

const hours = {
  0: range(6, 101),
  1: range(3, 45),
  2: range(4, 48),
  3: range(3, 53),
  4: range(5, 56),
  5: range(4, 62),
  6: range(6, 67),
  7: range(5, 73),
  8: range(5, 78),
  9: range(4, 84),
  10: range(4, 89),
  11: range(4, 96)
};

const fuenf = range(3, 9);
const zehn = range(3, 20);
const viertel = range(6, 12);
const zwanzig = range(6, 23);
const halb = range(5, 37);

const vor = range(3, 31);
const nach = range(2, 34);
const fullHour = [];

const fiveMinutes = {
  0: [...fullHour],
  5: [...fuenf, ...nach],
  10: [...zehn, ...nach],
  15: [...viertel, ...nach],
  20: [...zwanzig, ...nach],
  25: [...fuenf, ...vor, ...halb],
  30: [...halb],
  35: [...fuenf, ...nach, ...halb],
  40: [...zwanzig, ...vor],
  45: [...viertel, ...vor],
  50: [...zehn, ...vor],
  55: [...fuenf, ...vor]
};

const getActive = (hour, five, minutes) => {
  const active = [
    ...base,
    ...hours[hour],
    ...fiveMinutes[five],
    ...range(minutes, 111)
  ];
  return active;
};

const transformTime = ([hours, minutes]) => {
  const five = Math.floor(minutes / 5) * 5; // Get minutes rounded down to 5
  let hour = hours % 12; // Get 12h time format
  if (five >= 25) hour = (hour + 1) % 12; // If minute > 25 -> Jump to next hour
  const minute = minutes % 5; // Get minutes over threshold of 5
  return [hour, five, minute];
};

export { letters, getActive, transformTime };
