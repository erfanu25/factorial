// This component is made for SO question: https://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default

import React, { useState }  from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [result, getResult] = useState(0);
  const onNumberChange = (e) => {
     e.preventDefault()
     setCount(e.target.value)
  }

  const setResult = (e) => {
    e.preventDefault()
    var i,fact = 1;
    if (count < 0)
        getResult(0)
    else {
        for (i = 1; i <= count; ++i) {
            fact *= i;
        }
      getResult(fact)
    }
 }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <form>
        <input type="number"  onChange={onNumberChange} placeholder="Enter a number..." />
        <br />
        <button onClick={setResult} >Calculate Factorial</button>
      </form>
      <h2>Factorial: {result}</h2>
    </div>
  );
}
