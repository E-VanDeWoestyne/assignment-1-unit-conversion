import React from "react";

const Weight = () => {
  return (
    <div>
      <section id="weight" className="m-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Weight Conversion
        </h2>

        <form className="bg-white shadow-md rounded p-6">
          <label className="text-gray-700 text-lg mb-2">Kilograms:</label>
          <div className="flex items-center gap-2 mb-4">
            <input
              id="kgInput"
              type="text"
              placeholder="Enter weight in kg"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              id="kgToLbButton"
              type="button"
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Pounds
            </button>
            <input
              id="kgToLbResult"
              type="text"
              placeholder="Result"
              className="w-full p-2 border border-gray-300 rounded text-center"
              readOnly
            />
          </div>

          <label className="text-gray-700 text-lg mb-2">Pounds:</label>
          <div className="flex items-center gap-2">
            <input
              id="lbInput"
              type="text"
              placeholder="Enter weight in lbs"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              id="lbToKgButton"
              type="button"
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Kilograms
            </button>
            <input
              id="lbToKgResult"
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

export default Weight;
