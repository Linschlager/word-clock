import { rangeFrom as range } from "../util";

const letters = [
  "ESKISTAFÜNF".split(""),
  "ZEHNZWANZIG".split(""),
  "DREIVIERTEL".split(""),
  "VORFUNKNACH".split(""),
  "HALBAELFÜNF".split(""),
  "EINSXAMZWEI".split(""),
  "DREIAUJVIER".split(""),
  "SECHSNLACHT".split(""),
  "SIEBENZWÖLF".split(""),
  "ZEHNEUNKUHR".split("")
];

const base = [1, 2, 4, 5, 6];

const hours = {
  0: range(5, 95),
  1: range(3, 56),
  1.5: range(1, 59),
  2: range(4, 63),
  3: range(4, 67),
  4: range(4, 74),
  5: range(4, 52),
  6: range(4, 78),
  7: range(6, 89),
  8: range(4, 85),
  9: range(4, 103),
  10: range(4, 100),
  11: range(3, 50)
};

const fuenf = range(4, 8);
const zehn = range(4, 12);
const viertel = range(7, 27);
const zwanzig = range(7, 16);
const halb = range(4, 45);

const vor = range(3, 34);
const nach = range(4, 41);
const fullHour = range(3, 108);

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
  // Special Case: When time is exactly 1 o'clock, don't put hour[1.5] in
  if (hour === 1 && five > 0) active.push(...hours[1.5]);
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
