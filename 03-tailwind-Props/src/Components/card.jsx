import React from "react";

function Card({Username , btntext}) {
    console.log(Username);
    
  return (
    <>
      <div className=" flex-row items-center gap-6 p-7 md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md object-cover"
            alt=""
            src="./src/download (6).jpg"
          />
        </div>
        <div className="flex items-center md:items-start">
          <h2 className="text-2xl font-medium">{Username}</h2>
          <span className="font-medium text-sky-500">The Anti-Patterns</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
          <button>{btntext}</button>
        </div>
      </div>
    </>
  );
}

export default Card;
