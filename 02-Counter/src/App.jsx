import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);
  const addvalue = () => {
    Counter = Counter + 1;
    setCounter(Counter);
  };
  const removeval = () => {
    Counter = Counter - 1;
    setCounter(Counter);
  };

  return (
    <>
      <h1>کاؤنٹر تسبیح </h1>
      <h2>Recite Tasbeeh : {Counter}</h2>
      <button onClick={addvalue} disabled={Counter === 100}>
        increase : {Counter}
      </button>
      <br />
      <br />
      <button onClick={removeval} disabled={Counter === 0}>
        decrease : {Counter}
      </button>
    </>
  );
}

export default App;
