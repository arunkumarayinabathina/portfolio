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
    <header className="w-full bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Branding */}
        <div className="text-white font-extrabold text-3xl">Arun</div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden sm:flex flex-grow justify-center">
          <NavigationMenuList className="flex space-x-6 sm:space-x-12">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300 hover:cursor-pointer">
                <Link to="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300 hover:cursor-pointer">
                <Link to="/repos">Repos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300 hover:cursor-pointer">
                <Link to="/skills">Skills</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300 hover:cursor-pointer">
                <Link to="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white ml-auto"
        >
          {isMenuOpen ? (
            <FaTimes size={30} /> // Show "X" when the menu is open
          ) : (
            <FaBars size={30} /> // Show hamburger icon when the menu is closed
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <NavigationMenu className="sm:hidden fixed top-16 right-0 w-3/4 bg-gray-800/90 text-white p-3 z-10">
            <NavigationMenuList className="flex flex-col space-y-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white font-medium text-lg hover:text-slate-300"
                  onClick={toggleMenu} // Close menu on page click
                >
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white font-medium text-lg hover:text-slate-300"
                  onClick={toggleMenu} // Close menu on page click
                >
                  <Link to="/repos">Repos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white font-medium text-lg hover:text-slate-300"
                  onClick={toggleMenu} // Close menu on page click
                >
                  <Link to="/skills">Skills</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white font-medium text-lg hover:text-slate-300"
                  onClick={toggleMenu} // Close menu on page click
                >
                  <Link to="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </nav>
    </header>
  );
}

export default Navbar; 
