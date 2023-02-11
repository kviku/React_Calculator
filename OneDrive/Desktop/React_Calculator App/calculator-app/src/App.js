import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const [successmessage, setSuccessMessage] = useState("");
  const [resultmessage, setResultMessage] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "num1") {
      setNum1(parseInt(value));
    } else if (name === "num2") {
      setNum2(parseInt(value));
    }
  };
 

  const validInputs = () => {
    if (num1 === "") {
      setErrorMessage("Error: Success: num1 can't be empty");

      return false;
    } else if (num2 === "") {
      setErrorMessage("Error: Success: num2 can't be empty");

      return false;
    } else if (isNaN(num1) || isNaN(num2)) {
      setErrorMessage("inputs must be numbers");

      return false;
    } else {
      setErrorMessage("");

      return true;
    }
  };
  
  const handleAddition = () => {
    if (!validInputs()) return;
    setResult(num1 + num2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };
  const handleSubtraction = () => {
    if (!validInputs()) return;
    setResult(num1 - num2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };
  const handleMultiplication = () => {
    if (!validInputs()) return;
    setResult(num1 * num2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };
  const handlDivision = () => {
    if (!validInputs()) return;
    setResult(num1 / num2);
    setResultMessage("Result : ");
    setSuccessMessage("Success: Your result is shown above!");
  };

  return (
    <div className="App">
      <div>
        <h1>React Calculator</h1>
        <input
          type="text"
          name="num1"
          placeholder="Num 1 "
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="num2"
          placeholder="Num 2"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handlDivision}>/</button>
        <br />

        <p className="errmsg">{errormessage}</p>
        <h3>
          {resultmessage}
          {result}
        </h3>
        <p className="succmsg">{successmessage}</p>
      </div>
    </div>
  );
}

export default App;