import React from "react";

const Temperature = () => {
  return (
    <div>
      <section id="temperature" className="mb-8">
        <h2 className="text-center font-bold text-gray-800 mb-4 ">
          Temperature Conversion
        </h2>
        <form className="bg-white shadow-md rounded p-6">
          <label
            for="temperatureInput"
            className="block text-gray-700 text-lg mb-2"
          >
            Enter Temperature:
          </label>
          <input
            id="temperatureInput"
            type="text"
            placeholder="Enter value (For Example: 37)"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Fahrenheit
            </button>
            <button
              type="button"
              className="w-full bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Celsius
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Temperature;
