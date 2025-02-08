import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Branding */}
        <div className="text-white font-extrabold text-2xl sm:text-3xl">Arun</div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden sm:flex flex-grow justify-center">
          <NavigationMenuList className="flex space-x-6 sm:space-x-12">
            {["Home", "Repos", "Skills", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300 hover:cursor-pointer">
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="sm:hidden text-white z-50">
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        {["Home", "Repos", "Skills", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-white text-xl font-semibold hover:text-gray-300"
            onClick={toggleMenu}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
