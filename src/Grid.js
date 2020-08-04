import React from "react";

const Field = ({ char, rIndex, cIndex, activeChars }) => {
  const index = rIndex * 11 + (cIndex + 1);
  const isActive = activeChars.includes(index);
  const minuteActive =
    (index === 1 && activeChars.includes(111)) ||
    (index === 11 && activeChars.includes(112)) ||
    (index === 100 && activeChars.includes(114)) ||
    (index === 110 && activeChars.includes(113));
  return (
    <div
      className={`col ${
        minuteActive ? `minute-${index}` : `minute-${index}-inactive`
      }`}
    >
      <span className={isActive ? "glow" : "inactive"} title={index}>
        {char}
      </span>
    </div>
  );
};

const Grid = ({ letters, activeChars = [] }) => {
  return (
    <div id="grid">
      {letters.map((row, rIndex) => (
        <div key={`R${rIndex}`} className="row">
          {row.map((col, cIndex) => (
            <Field
              key={`R${rIndex}/C${cIndex}`}
              cIndex={cIndex}
              rIndex={rIndex}
              char={col}
              activeChars={activeChars}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
