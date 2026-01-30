import { useState } from "react";

function App() {
  const [Color, setcolor] = useState("olive");
  return (
    <div
      className="w-screen h-screen duration-400"
      style={{ backgroundColor: Color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <h1 className="text-center mb-2.5 font-semibold text-white">
          Click the Button and According to Button Color Change the Background
          Color
        </h1>
        <div className="flex flex-wrap justify-center shadow-lg bg-white p-2 gap-4 rounded-2xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setcolor("green")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("purple")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 py-1 text-black rounded-full cursor-pointer"
            style={{ background: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("pink")}
            className="outline-none px-4 py-1 text-black rounded-full cursor-pointer"
            style={{ background: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setcolor("gray")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setcolor("orange")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "Black" }}
          >
            black
          </button>
          <button
            onClick={() => setcolor("white")}
            className="outline-none px-4 py-1 text-black rounded-full cursor-pointer"
            style={{ background: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setcolor("brown")}
            className="outline-none px-4 py-1 text-white rounded-full cursor-pointer"
            style={{ background: "brown" }}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
