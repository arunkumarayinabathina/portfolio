import React, { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing FaBars and FaTimes

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Branding (optional) */}
        <div className="text-white font-extrabold text-3xl">Arun</div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden sm:flex flex-grow justify-center">
          <NavigationMenuList className="flex space-x-6 sm:space-x-12">
            {/* Links (centered) */}
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

        {/* Hamburger Icon for Mobile (now on the right) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white ml-auto" // 'ml-auto' ensures the button goes to the right
        >
          {isMenuOpen ? (
            <FaTimes size={30} /> // Show "X" when the menu is open
          ) : (
            <FaBars size={30} /> // Show hamburger icon when the menu is closed
          )}
        </button>

        {/* Mobile Menu (when the hamburger icon is clicked) */}
        {isMenuOpen && (
          <NavigationMenu className="sm:hidden absolute top-16 right-0 w-48 bg-gray-800 text-white p-4">
            <NavigationMenuList className="flex flex-col items-start space-y-4">
              {/* Links for mobile view, aligned right below the hamburger icon */}
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300">
                  <Link to="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300">
                  <Link to="/repos">Repos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300">
                  <Link to="/skills">Skills</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-white font-medium text-lg hover:text-slate-300">
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
