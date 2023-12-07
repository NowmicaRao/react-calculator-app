import React, { useState } from "react";
import * as math from "mathjs";
import "./Calculator.css";

const Calculator = () => {
  const keys = [
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    "(",
    ")",
  ];
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };
  const handleBackspace = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };
  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = math.evaluate(expression);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={expression} readOnly />
      </div>
      <div className="buttons">
        <button className="topRow" onClick={handleClear}>
          C
        </button>
        <button className="topRow" onClick={handleBackspace}>
          ←
        </button>

        {keys.map((el) => (
          <button
            className={
              ["/", "*", "-", "+", "(", ")"].includes(el)
                ? "operator"
                : el === "%"
                ? "topRow"
                : ""
            }
            onClick={() => handleButtonClick(el)}
          >
            {el}
          </button>
        ))}

        <button className="equal" onClick={handleCalculate}>
          =
        </button>
      </div>
      <div className="result">
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
