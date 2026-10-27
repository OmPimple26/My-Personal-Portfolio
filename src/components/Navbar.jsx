import React, { useState } from "react";
import { Link } from "react-scroll";

const menuItems = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const renderLink = (item, mobile = false) => (
    <Link
      key={item}
      to={item.toLowerCase()}
      smooth
      duration={500}
      offset={-75}
      onClick={() => {
        if (mobile) setIsOpen(false);
      }}
      className="cursor-pointer transition duration-300 hover:text-cyan-400"
    >
      {item}
    </Link>
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-700/60 bg-[#0B1120]/90 text-slate-100 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Om Pimple<span className="text-cyan-400">.</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {menuItems.map((item) => (
            <li key={item}>{renderLink(item)}</li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="text-2xl text-cyan-400 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-5 border-t border-slate-700 bg-[#0B1120] py-6 lg:hidden">
          {menuItems.map((item) => (
            <li key={item}>{renderLink(item, true)}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}
