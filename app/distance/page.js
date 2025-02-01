import React from "react";

const Distance = () => {
  return (
    <div>
      <section id="distance" className="m-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Distance Conversion
        </h2>

        <form className="bg-white shadow-md rounded p-6">
          <label className="text-gray-700 text-lg mb-2">Kilometers:</label>
          <div className="flex items-center gap-2 mb-4">
            <input
              id="kmInput"
              type="text"
              placeholder="Enter distance in km"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              id="kmToMilesButton"
              type="button"
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Miles
            </button>
            <input
              id="kmToMilesResult"
              type="text"
              placeholder="Result"
              className="w-full p-2 border border-gray-300 rounded text-center"
              readOnly
            />
          </div>

          <label className="text-gray-700 text-lg mb-2">Miles:</label>
          <div className="flex items-center gap-2">
            <input
              id="milesInput"
              type="text"
              placeholder="Enter distance in miles"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              id="milesToKmButton"
              type="button"
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Kilometers
            </button>
            <input
              id="milesToKmResult"
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

export default Distance;
