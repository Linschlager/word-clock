import { rangeFrom as range } from "../util";

const letters = [
  "ESOISCHDZÄÄ".split(""),
  "VIERTELFÜNF".split(""),
  "ZWANZIGDVOR".split(""),
  "ABOHALBIEPM".split(""),
  "EINSFDHZWEI".split(""),
  "DREIDFVIERI".split(""),
  "FÜNFIQSÄGSI".split(""),
  "SIBNIPACHTI".split(""),
  "NÜNIDSZÄHNI".split(""),
  "ELFIFZWÖLFI".split("")
];

const base = [1, 2, 4, 5, 6, 7];

const hours = {
  0: range(6, 105),
  1: range(4, 45),
  2: range(4, 52),
  3: range(4, 56),
  4: range(5, 62),
  5: range(5, 67),
  6: range(5, 73),
  7: range(5, 78),
  8: range(5, 84),
  9: range(4, 89),
  10: range(5, 95),
  11: range(4, 100)
};

const fuenf = range(4, 19);
const zehn = range(3, 9);
const viertel = range(7, 12);
const zwanzig = range(7, 23);
const halb = range(5, 37);

const vor = range(3, 31);
const nach = range(2, 34);

const fiveMinutes = {
  0: [],
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
