"use client";

import { LuShoppingCart } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import { MdPersonOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // Added missing import
import Link from "next/link";

// Redux imports
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../lib/hooks";
import {
  incrementItem,
  decrementItem,
  removeFromCart,
} from "../../../lib/slice/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  /*====State ======*/
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); 
   

  // Accessing cartDetails 

  const { items = [], total = 0 } = useAppSelector(
    (state) => state.cartDetails || {}
  );
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Increment and Decrement item functions
  const handleIncrement = (id, e) => {
    e.stopPropagation(); 
    dispatch(incrementItem({ id }));
  };

  const handleDecrement = (id, e) => {
    e.stopPropagation(); 
    dispatch(decrementItem({ id }));
  };

  // Remove item from cart
  const handleRemove = (id, e) => {
    e.stopPropagation();
    dispatch(removeFromCart({ id }));
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  return (
    <div className="bg-primary-white sticky top-0 left-0 z-50">
      {/* Header start */}
      <header className="max-w-container mx-auto px-4 py-8 flex items-center justify-between">
        {/* Logo Start */}
        <div className="sm:w-[15%]">
          <Link href="/">
            <img
              className="w-[160px] lg:w-[200px] cursor-pointer"
              src="/images/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        {/* Logo End */}

        {/* Input Box Start */}
        <div className="relative lg:w-[35%] ml-10 hidden lg:block">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full px-3 py-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none "
            placeholder="Search"
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange text-white rounded-r-full px-4 py-2 text-sm"
          >
            Search
          </button>
        </div>
        {/* Input Box End */}

        {/* Nav Links Start */}
        <nav className="lg:w-[40%] ml-1 sm:ml-10 hidden sm:block">
          <ul className="flex gap-x-4 xl:gap-x-8 text-sm font-medium text-gray-700 relative">
            {/* Dropdown for All Category */}
            <li className="relative group flex items-center gap-x-3">
              <a
                href="#"
                className="font-figtree text-xl font-normal text-six-black flex items-center"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default anchor tag behavior
                  setIsCategoryOpen((prev) => !prev); // Toggle the dropdown visibility
                }}
              >
                All Category
              </a>
              <IoIosArrowDown className="text-xl" />
              {/* Dropdown menu */}
              {isCategoryOpen && (
                <ul className="absolute left-0 top-full bg-white shadow-lg mt-2 rounded-lg w-[200px] z-10">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link href="" className="text-gray-700 text-xl">
                      Category One
                    </Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link href="" className="text-gray-700 text-xl">
                      Category Two
                    </Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link href="" className="text-gray-700 text-xl">
                      Category Three
                    </Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link href="" className="text-gray-700 text-xl">
                      Category Four
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Other navigation links */}
            <li>
              <Link
                href="/user/coupon"
                className="font-figtree text-xl font-normal text-six-black"
              >
                Coupon
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="font-figtree text-xl font-normal text-six-black"
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Nav Links End */}

        {/* Last Icon Start */}
        <div className="sm:flex gap-x-8 text-gray-600 w-[10%] justify-end items-center hidden">
          <div
            className="group hover:text-blue-700 transition duration-200 cursor-pointer relative"
            onClick={() => setIsCartVisible((prev) => !prev)} // Toggle cart visibility
          >
            <LuShoppingCart className="text-3xl text-orange" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}

            {isCartVisible && (
              <div
                className="absolute z-20 right-0 mt-2 w-[450px] bg-white shadow-xl rounded-lg p-4"
                onClick={(e) => e.stopPropagation()} // Prevent click outside dropdown from affecting buttons
              >
                <div className="max-h-72 overflow-y-auto">
                  {items.length === 0 ? (
                    <div className="text-center text-gray-500">Your cart is empty.</div>
                  ) : (
                    items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 mb-3 pb-3">
                        <img
                          src={item.image}
                          alt={item.title || "Item"}
                          className="w-[90px] h-[90px] object-cover rounded-md shadow-sm"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{item.title || "No Title"}</div>
                          <div className="text-sm text-gray-500">
                            {item.subtitle || "No description"}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <button
                              onClick={(e) => handleDecrement(item.id, e)}
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={(e) => handleIncrement(item.id, e)}
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-sm font-semibold mt-2 text-blue-600">
                            ${item.price * item.quantity}
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleRemove(item.id, e)}
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <MdDelete className="text-4xl" />
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <div className="mt-4 border-t-2 border-black pt-3 text-right font-semibold text-lg flex justify-between">
                  <span>Total</span>
                  <span className="text-xl text-blue-600">${total}</span>
                </div>
                <div className="mt-4 text-center">
                  <Link href="/user/checkout">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                      onClick={() => setIsCartVisible(false)}
                    >
                      Go to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="hover:text-blue-700 transition duration-200 cursor-pointer">
            <MdPersonOutline className="text-3xl" />
          </div>
        </div>
        {/* Last Icon End */}

        {/* Mobile Menu Toggle */}
        <FaBars
          className="text-xl block sm:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-[400px] bg- bg-white z-50 flex flex-col px-4 py-6">
            <div className="flex justify-between items-center mb-4">
              <img className="w-[160px]" src="/images/logo.png" alt="Logo" />
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <ul className="flex flex-col gap-y-4 text-xl font-medium">
              <li className="flex flex-col">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                >
                  <span>All Category</span>
                  <IoIosArrowDown
                    className={`text-xl transform ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isCategoryOpen && (
                  <ul className="pl-4 pt-2 flex flex-col gap-y-2">
                    <li>
                      <Link href="">Category One</Link>
                    </li>
                    <li>
                      <Link href="">Category Two</Link>
                    </li>
                    <li>
                      <Link href="">Category Three</Link>
                    </li>
                    <li>
                      <Link href="">Category Four</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="">Coupon</Link>
              </li>
              <li>
                <Link href="">Support</Link>
              </li>
              <li>
                <Link href="">Account</Link>
              </li>
            </ul>
          </div>
        )}
        {/* Mobile Menu */}
      </header>
      <hr />
    </div>
  );
};

export default Navbar;
