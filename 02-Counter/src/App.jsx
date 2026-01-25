import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let Counter = 8
  const addvalue = () => {
    console.log('Value added:' , Math.random());
    
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {Counter}</h2>
      <button onClick={addvalue}>increase Value :</button>
       <br />
       <br />
      <button>decrease Value :</button>
    </>
  );
}

export default App;
