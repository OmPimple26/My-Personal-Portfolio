import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-pink-500">
          Om Pimple
        </h1>

        <ul className="flex gap-6 text-sm md:text-base">
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-pink-500 transition duration-300"
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;