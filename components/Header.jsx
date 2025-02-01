import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-zinc-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-base font-bold">
            <a href="index.html" className="text-black hover:text-blue-200">
              Unit Converter
            </a>
          </h1>
          <ul className="flex space-x-4">
            <li>
              <a href="weight.html" className="text-black hover:text-blue-200">
                Weight
              </a>
            </li>
            <li>
              <a
                href="distance.html"
                className="text-black hover:text-blue-200"
              >
                Distance
              </a>
            </li>
            <li>
              <a
                href="temperature.html"
                className="text-black hover:text-blue-200"
              >
                Temperature
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
