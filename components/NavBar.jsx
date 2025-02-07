import Link from "next/link";

// Created 04-02-25
// Provides the header navigational bar at the top of every page to allow
// the user to navigate between the different unit conversion pages.

const NavBar = () => {
  return (
    <div>
      <nav className="bg-zinc-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-base font-bold">
            <Link href="/" className="text-2xl text-white hover:text-blue-200">
              Unit Converter
            </Link>
          </h1>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/weight"
                className="text-2xl text-white hover:text-blue-200"
              >
                Weight
              </Link>
            </li>
            <li>
              <Link
                href="/distance"
                className="text-2xl text-white hover:text-blue-200"
              >
                Distance
              </Link>
            </li>
            <li>
              <Link
                href="/temperature"
                className="text-2xl text-white hover:text-blue-200"
              >
                Temperature
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
