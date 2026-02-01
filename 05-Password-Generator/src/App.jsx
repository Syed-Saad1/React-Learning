import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [length, setlength] = useState(8);
  const [Number, setNumber] = useState(false);
  const [Character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");

  //UseRef Hook

  const PasswordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
    if (Number) str += "0123456789";
    if (Character) str += "[]{}@#!&|$><.+-=*_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, Number, Character, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, Number, Character, PasswordGenerator]);
  return (
    <div
      className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 
    text-orange-500 bg-gray-800
    "
    >
      <h1 className="text-center text-white font-bold text-xl">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-5 mt-2">
        <input
          type="text"
          className="outline-none w-full py-1 px-3 bg-white text-gray-950"
          placeholder="Generate Password"
          readOnly
          value={Password}
          ref={PasswordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none hover:bg-blue-900 duration-300 bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={setNumber}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={setCharacter}
            id="characterInput"
            onChange={() => {
              setCharacter((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
