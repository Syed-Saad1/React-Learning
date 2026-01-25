import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit to Me
  </a>
);

const ReactElement = React.createElement(
  "a",
  { href: "https://youtube.com", target: "_blank" },
  "Click to me visit a youtube",
);

createRoot(document.getElementById("root")).render(
  // anotherElement
  // ReactElement
  // <MyApp />
  <App />,
);
