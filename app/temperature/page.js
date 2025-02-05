"use client";
import React, { useState } from "react";
import CreateConverter from "@/components/CreateConverter";

const parseInput = (input) => {
  if (input.includes(",")) {
    return input.split(",").map((value) => parseFloat(value.trim()));
  }
  const singleValue = parseFloat(input.trim());
  return isNaN(singleValue) ? "" : singleValue;
};

const Temperature = () => {
  const [cInput, setCInput] = useState("");
  const [fInput, setFInput] = useState("");
  const [cToFResult, setCToFResult] = useState("");
  const [fToCResult, setFToCResult] = useState("");

  const convertCToF = () => {
    const parsedInput = parseInput(cInput);
    if (parsedInput !== "") {
      const converter = CreateConverter("c", "F");
      const result = converter(parsedInput);
      setCToFResult(
        Array.isArray(result)
          ? result.map((r) => r.toFixed(2)).join(", ")
          : result.toFixed(2)
      );
    }
  };

  const convertFToC = () => {
    const parsedInput = parseInput(fInput);
    if (parsedInput !== "") {
      const converter = CreateConverter("f", "C");
      const result = converter(parsedInput);
      setFToCResult(
        Array.isArray(result)
          ? result.map((r) => r.toFixed(2)).join(", ")
          : result.toFixed(2)
      );
    }
  };

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
              type="text"
              value={cInput}
              onChange={(e) => setCInput(e.target.value)}
              placeholder="Enter temperature in Celcius"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={convertCToF}
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Fahrenheit
            </button>
            <input
              type="text"
              value={cToFResult}
              placeholder="Result"
              className="w-full p-2 border border-gray-300 rounded text-center"
              readOnly
            />
          </div>

          <label className="text-gray-700 text-lg mb-2">Fahrenheit:</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={fInput}
              onChange={(e) => setFInput(e.target.value)}
              placeholder="Enter temperature in fahrenheit"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={convertFToC}
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Celcius
            </button>
            <input
              type="text"
              value={fToCResult}
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
