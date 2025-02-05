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

const Weight = () => {
  const [kgInput, setKgInput] = useState("");
  const [lbInput, setLbInput] = useState("");
  const [kgToLbResult, setKgToLbResult] = useState("");
  const [lbToKgResult, setLbToKgResult] = useState("");

  const convertKgToLb = () => {
    const parsedInput = parseInput(kgInput);
    if (parsedInput !== "") {
      const converter = CreateConverter("kg", "LB");
      const result = converter(parsedInput);
      setKgToLbResult(
        Array.isArray(result)
          ? result.map((r) => r.toFixed(2)).join(", ")
          : result.toFixed(2)
      );
    }
  };

  const convertLbToKg = () => {
    const parsedInput = parseInput(lbInput);
    if (parsedInput !== "") {
      const converter = CreateConverter("lb", "Kg");
      const result = converter(parsedInput);
      setLbToKgResult(
        Array.isArray(result)
          ? result.map((r) => r.toFixed(2)).join(", ")
          : result.toFixed(2)
      );
    }
  };
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
              type="text"
              value={kgInput}
              onChange={(e) => setKgInput(e.target.value)}
              placeholder="Enter weight in kg"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={convertKgToLb}
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Pounds
            </button>
            <input
              type="text"
              value={kgToLbResult}
              placeholder="Result"
              className="w-full p-2 border border-gray-300 rounded text-center"
              readOnly
            />
          </div>

          <label className="text-gray-700 text-lg mb-2">Pounds:</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={lbInput}
              onChange={(e) => setLbInput(e.target.value)}
              placeholder="Enter weight in lbs"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={convertLbToKg}
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Kilograms
            </button>
            <input
              type="text"
              value={lbToKgResult}
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
