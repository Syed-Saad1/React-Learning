import { useState } from "react";
import { InputBox } from "./components";
import usecurrencyinfo from "./Hooks/usecurrencyinfo";

function App() {
  const [Amount, setAmount] = useState(0);
  const [From, setFrom] = useState("pkr");
  const [To, setTo] = useState("usd");
  const [ConvertedAmount, setConvertedAmount] = useState(0);

  const currencyinfo = usecurrencyinfo(From);
  const Options = Object.keys(currencyinfo);

  const swap = () => {
    setFrom(To);
    setTo(From);
    setConvertedAmount(Amount);
    setAmount(ConvertedAmount);
  };

  const convert = () => {
    setConvertedAmount(Amount * currencyinfo[To]);
  };
  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('./bg.jpg')",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto bg-[#f120d6] border border-gray-40 rounded-lg p-5 backdrop-blur-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1 font-bold text-black">
              <InputBox
                label="From"
                amount={Amount}
                currencyOption={Options}
                onCurrencyChnge={(currency) => setFrom(currency)}
                selectCurrency={From}
                onAmountChange={(Amount) => setAmount(Amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4 font-bold text-black">
              <InputBox
                label="To"
                amount={ConvertedAmount}
                currencyOption={Options}
                onCurrencyChnge={(curency) => setTo(curency)}
                selectCurrency={To}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
