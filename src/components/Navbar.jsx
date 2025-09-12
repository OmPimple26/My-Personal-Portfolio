import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-[#1a1a1a] text-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* <h1 className="text-2xl font-bold text-primary">Om Pimple</h1> */}
        <h1 className="text-xl md:text-2xl font-bold text-primary">Om Pimple</h1>
        {/* <ul className="flex space-x-6"> */}
        <ul className="flex space-x-3 sm:space-x-4 md:space-x-6 text-sm sm:text-base md:text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-primary transition-colors duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar