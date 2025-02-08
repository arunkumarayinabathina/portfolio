import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // Ensures menu closes on navigation

  return (
    <header className="w-full bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Branding */}
        <div className="text-white font-extrabold text-3xl">Arun</div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden sm:flex flex-grow justify-center">
          <NavigationMenuList className="flex space-x-6 sm:space-x-12">
            <NavigationMenuItem>
              <Link
                to="/"
                className="text-white font-medium text-lg hover:text-slate-300"
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/repos"
                className="text-white font-medium text-lg hover:text-slate-300"
              >
                Repos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/skills"
                className="text-white font-medium text-lg hover:text-slate-300"
              >
                Skills
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/contact"
                className="text-white font-medium text-lg hover:text-slate-300"
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="sm:hidden text-white z-50">
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </nav>

      {/* Mobile Menu (Full Screen with Low Opacity) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center space-y-6 sm:hidden z-40">
          <NavigationMenuList className="flex flex-col space-y-6 text-center">
            <NavigationMenuItem>
              <Link
                to="/"
                className="text-white text-2xl font-semibold hover:text-slate-300"
                onClick={closeMenu} // Close menu when clicking
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/repos"
                className="text-white text-2xl font-semibold hover:text-slate-300"
                onClick={closeMenu}
              >
                Repos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/skills"
                className="text-white text-2xl font-semibold hover:text-slate-300"
                onClick={closeMenu}
              >
                Skills
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/contact"
                className="text-white text-2xl font-semibold hover:text-slate-300"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </header>
  );
}

export default Navbar;
