import React from "react";

const Temperature = () => {
  return (
    <div>
      <section id="temperature" className="m-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Temperature Conversion
        </h2>

        <form className="bg-white shadow-md rounded p-6">
          <label className="text-gray-700 text-lg mb-2">Celsius:</label>
          <div className="flex items-center gap-2 mb-4">
            <input
              id="cInput"
              type="text"
              placeholder="Enter temperature in Celcius"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              id="cToFButton"
              type="button"
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Fahrenheit
            </button>
            <input
              id="cToFResult"
              type="text"
              placeholder="Result"
              className="w-full p-2 border border-gray-300 rounded text-center"
              readOnly
            />
          </div>

          <label className="text-gray-700 text-lg mb-2">Fahrenheit:</label>
          <div className="flex items-center gap-2">
            <input
              id="fInput"
              type="text"
              placeholder="Enter temperature in fahrenheit"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              id="fToCButton"
              type="button"
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Celcius
            </button>
            <input
              id="fToCResult"
              type="text"
              placeholder="Result"
              className="w-full p-2 border border-gray-300 rounded text-center"
              readOnly
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Temperature;
