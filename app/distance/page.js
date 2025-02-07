"use client";
import React, { useState } from "react";
import CreateConverter from "@/components/CreateConverter";

// Created 05-02-25
// Distance Conversion webpage
// Provides two input boxes for user to enter value of either kilometers or miles
// Provides a button for each input to take user value and convert to other distance.
// Opposite input boxes, displays the converted unit if button has been pressed.
//
// Can do multiple values if seperated by a comma.

const parseInput = (input) => {
  if (input.includes(",")) {
    return input.split(",").map((value) => parseFloat(value.trim()));
  }
  const singleValue = parseFloat(input.trim());
  return isNaN(singleValue) ? "" : singleValue;
};

const Distance = () => {
  const [kmInput, setKmInput] = useState("");
  const [miInput, setMiInput] = useState("");
  const [kmToMiResult, setKmToMiResult] = useState("");
  const [miToKmResult, setMiToKmResult] = useState("");

  const convertKmToMi = () => {
    const parsedInput = parseInput(kmInput);
    if (parsedInput !== "") {
      const converter = CreateConverter("km", "Mi");
      const result = converter(parsedInput);
      setKmToMiResult(
        Array.isArray(result)
          ? result.map((r) => r.toFixed(2)).join(", ")
          : result.toFixed(2)
      );
    }
  };

  const convertMiToKm = () => {
    const parsedInput = parseInput(miInput);
    if (parsedInput !== "") {
      const converter = CreateConverter("mi", "Km");
      const result = converter(parsedInput);
      setMiToKmResult(
        Array.isArray(result)
          ? result.map((r) => r.toFixed(2)).join(", ")
          : result.toFixed(2)
      );
    }
  };

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
              type="text"
              value={kmInput}
              onChange={(e) => setKmInput(e.target.value)}
              placeholder="Enter distance in km"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={convertKmToMi}
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Miles
            </button>
            <input
              type="text"
              value={kmToMiResult}
              placeholder="Result"
              className="w-full p-2 border border-gray-300 rounded text-center"
              readOnly
            />
          </div>

          <label className="text-gray-700 text-lg mb-2">Miles:</label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={miInput}
              onChange={(e) => setMiInput(e.target.value)}
              placeholder="Enter distance in miles"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="button"
              onClick={convertMiToKm}
              className="px-5 bg-sky-400 text-white p-2 rounded hover:bg-sky-600"
            >
              Convert to Kilometers
            </button>
            <input
              type="text"
              value={miToKmResult}
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
