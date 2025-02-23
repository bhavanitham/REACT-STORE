import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ handleCategoryChange, cartCount, openCart }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    
    <nav className="sticky top-0 h-[10vh] flex items-center justify-between px-4 sm:px-12 shadow-md bg-white z-50">
    {/* Logo */}
    <Link to='/'>
    <div className="flex items-center text-3xl font-bold">
      <span className="text-red-600">X</span>-mart
    </div>
    </Link>    
    
    {/* Dropdown Menu (Mobile) */}
    <div className="sm:hidden relative items-center right-14">
      <button
        onClick={toggleDropdown}
        className="text-gray-600 flex items-center space-x-2 focus:outline-none">
        <span className="font-medium"></span>
        <img
          src="/icons/down-arrow.svg"
          alt="Dropdown"
          className={`h-4 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isDropdownOpen && (
        <ul className="absolute bg-white shadow-md mt-2 w-40 rounded-md z-10">
          {["Men", "Women", "Electronics", "Jewelry"].map((category, idx) => (
            <li key={idx}>
              <button
                onClick={() =>
                  handleCategoryChange(
                    category.toLowerCase() === "jewelry"
                      ? "jewelery"
                      : `${category.toLowerCase()}'s clothing`
                  )
                }
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                {category}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>

    {/* Category Menu (Desktop) */}
    <div className="hidden sm:flex">
      <ul className="flex space-x-6">
        {["Men", "Women", "Electronics", "Jewelry"].map((category, idx) => (
          <li key={idx}>
            <button
              onClick={() =>
                handleCategoryChange(
                  category.toLowerCase() === "jewelry"
                    ? "jewelery"
                    :category.toLowerCase() === "electronics"
                    ?"electronics"
                    : `${category.toLowerCase()}'s clothing`
                )
              }
              className="relative text-gray-600 font-medium underline-offset-8 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-red-600 before:transition-all before:duration-300 hover:before:w-full">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>



    {/* Cart and Search (Unified for Mobile and Desktop) */}
    <div className="flex items-center space-x-4">
      {/* Search Icon */}
      <button className="text-gray-600 focus:outline-none sm:hidden">
        <img src="/icons/search.png" alt="Search" className="h-6 w-6" />
      </button>

      {/* Search Bar (Desktop) */}
      <div className="hidden sm:flex relative w-[40vw]">
        <img
          src="/icons/search.png"
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400"
        />
        <input
          type="text"
          placeholder="Search products, brands, and more"
          className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 rounded-md focus:outline-none focus:bg-white"
        />
      </div>

      {/* Cart */}
      <Link to="/cart">
      <button className="relative">
        <img src="/icons/cart.png" alt="Cart" className="h-7 sm:h-6" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      </button>
      </Link>
    </div>
  </nav>
    
  );
}

export default Navbar;
