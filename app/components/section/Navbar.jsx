"use client";

import { LuShoppingCart } from "react-icons/lu";
import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Link from 'next/link';

// Redux imports
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../lib/hooks'; 
import { incrementItem, decrementItem, removeFromCart } from "../../../lib/slice/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  // State to toggle cart visibility
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Accessing cartDetails from Redux store
  const { items, total } = useAppSelector((state) => state.cartDetails);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0); // Calculate total item count

  // Increment and Decrement item functions
  const handleIncrement = (id, e) => {
    e.stopPropagation(); // Prevent toggle
    dispatch(incrementItem({ id }));
  };

  const handleDecrement = (id, e) => {
    e.stopPropagation(); // Prevent toggle
    dispatch(decrementItem({ id }));
  };

  // Remove item from cart
  const handleRemove = (id, e) => {
    e.stopPropagation(); // Prevent toggle
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="bg-primary-white sticky top-0 left-0 z-50">
      {/* Header start */}
      <header className="max-w-container mx-auto px-4 py-8 flex items-center justify-between">
        
        {/* Logo Start */}
        <div className="w-[15%]">
          <Link href="/">
            <img className="w-full cursor-pointer" src="/images/logo.png" alt="Logo" />
          </Link>
        </div>
        {/* Logo End */}

        {/* Input Box Start */}
        <div className="relative w-[35%] ml-10">
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
            className="block w-full px-3 py-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
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
        <nav className="w-[40%] ml-10">
          <ul className="flex gap-x-8 text-sm font-medium text-gray-700">
            <li className="flex items-center gap-x-3">
              <a href="#" className="font-figtree text-xl font-normal text-six-black">
                All Category
              </a>
              <IoIosArrowDown className="text-xl" />
            </li>
            <li>
              <a href="/user/coupon" className="font-figtree text-xl font-normal text-six-black">
                Coupon
              </a>
            </li>
            <li>
              <a href="#" className="font-figtree text-xl font-normal text-six-black">
                Support
              </a>
            </li>
          </ul>
        </nav>
        {/* Nav Links End */}

        {/* Last Icon Start */}
        <div className="flex gap-x-8 text-gray-600 w-[10%] justify-end items-center">
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
                      <div key={item.id} className="flex items-center gap-4 mb-3  pb-3">
                        <img src={item.image} alt={item.title} className="w-[90px] h-[90px] object-cover rounded-md shadow-sm" />
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.subtitle}</div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <button
                              onClick={(e) => handleDecrement(item.id, e)} // Decrement without toggling
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={(e) => handleIncrement(item.id, e)} // Increment without toggling
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-sm font-semibold mt-2 text-blue-600">${item.price * item.quantity}</div>
                        </div>
                        <button
                          onClick={(e) => handleRemove(item.id, e)} // Remove without toggling
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <MdDelete className="text-4xl"/>
                        </button>
                      </div>
                    ))
                  )}
                </div>
                <div className="mt-4 border-t-2 border-black pt-3 text-right font-semibold text-lg flex justify-between">
                  <span className="block">Total</span>
                  <span className="text-xl text-blue-600">${total}</span>
                </div>
                <div className="mt-4 text-center">
                  <Link href="/user/checkout">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
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
      </header>
      <hr />
    </div>
  );
};

export default Navbar;
