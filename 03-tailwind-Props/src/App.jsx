import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/card";

function App() {
  let myobj = {
    name: "Saad",
    Age : 16,
  }
  return (
    <>
      <h1 className="bg-yellow-700 rounded-full px-4 py-2 font-bold italic">
        Card
      </h1>

      <Card Username="SFA Institute" btntext="Click Me !"/>
      <Card Username="Saad Raza" btntext="Visit Me !"/>
      <Card Username="Syed Sarim" btntext="Explore Me !"/>
      
    </>
  );
}

export default App;
