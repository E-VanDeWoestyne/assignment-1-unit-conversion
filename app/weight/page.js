import React from "react";

const Weight = () => {
  return (
    <div>
      <section id="weight" className="mb-8">
        <h2 className="text-center font-bold text-gray-800 mb-4">
          Weight Conversion
        </h2>

        <form className="bg-white shadow-md rounded p-6">
          <label for="weightInput" className="block text-gray-700 text-lg mb-2">
            Enter Weight:
          </label>
          <input
            id="weightInput"
            type="text"
            placeholder="Enter value (For Example: 50)"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Kilograms
            </button>
            <button
              type="button"
              className="w-full bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Pounds
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Weight;
