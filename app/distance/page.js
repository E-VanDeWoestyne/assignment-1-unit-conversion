import React from "react";

const Distance = () => {
  return (
    <div>
      <section id="distance" className="mb-8">
        <h2 className="text-center font-bold text-gray-800 mb-4">
          Distance Conversion
        </h2>
        <form class="bg-white shadow-md rounded p-6">
          <label
            for="distanceInput"
            className="block text-gray-700 text-lg mb-2"
          >
            Enter Distance:
          </label>
          <input
            id="distanceInput"
            type="text"
            placeholder="Enter value (For Example: 100)"
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Kilometers
            </button>
            <button
              type="button"
              className="w-full bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Miles
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Distance;
