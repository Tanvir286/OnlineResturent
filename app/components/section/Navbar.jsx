"use client";

import { LuShoppingCart } from "react-icons/lu";
import React from "react";
import { MdPersonOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

// Redux imports
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../lib/hooks'; 
import { addToCart, incrementItem, decrementItem, removeFromCart } from "../../../lib/slice/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  // Accessing cartDetails from Redux store
  const { items, total } = useAppSelector((state) => state.cartDetails);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0); // Calculate total item count

  // Increment and Decrement item functions
  const handleIncrement = (id) => {
    dispatch(incrementItem({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem({ id }));
  };

  // Remove item from cart
  const handleRemove = (id) => {
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
          {/* Search icon inside the input field */}
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
          {/* Search input field */}
          <input
            type="search"
            id="search"
            className="block w-full px-3 py-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            required
          />
          {/* Search button */}
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
            {/* All Category dropdown with arrow icon */}
            <li className="flex items-center gap-x-3">
              <a
                href="#"
                className="font-figtree text-xl font-normal text-six-black"
              >
                All Category
              </a>
              <IoIosArrowDown className="text-xl" />
            </li>
            {/* Coupon link */}
            <li>
              <a
                href="/user/coupon"
                className="font-figtree text-xl font-normal text-six-black"
              >
                Coupon
              </a>
            </li>
            {/* Support link */}
            <li>
              <a
                href="#"
                className="font-figtree text-xl font-normal text-six-black"
              >
                Support
              </a>
            </li>
          </ul>
        </nav>
        {/* Nav Links End */}

        {/* Last Icon Start */}
        <div className="flex gap-x-6 text-gray-600 w-[10%] justify-end items-center">
          {/* Cart Icon with item count */}
          <div className="group hover:text-blue-700 transition duration-200 cursor-pointer relative">
            <LuShoppingCart size={24} />
            {/* Cart item count */}
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}

            {/* Cart dropdown */}
            {itemCount > 0 && (  // Show dropdown only if there are items in the cart
              <div className="absolute z-20 right-0 mt-2 w-[450px] bg-white shadow-xl rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity z-100">
                <div className="max-h-72 overflow-y-auto">
                  {/* Display message if cart is empty */}
                  {items.length === 0 ? (
                    <div className="text-center text-gray-500">Your cart is empty.</div>
                  ) : (
                    // List cart items
                    items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 mb-3 border-b border-gray-200 pb-3">
                        <img src={item.image} alt={item.title} className="w-[90px] h-[90px] object-cover rounded-md shadow-sm" />
                        <div className="flex-1">
                          {/* Item title and subtitle */}
                          <div className="font-semibold text-lg">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.subtitle}</div>
                          {/* Item quantity controls */}
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <button
                              onClick={() => handleDecrement(item.id)} // Decrease item quantity
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => handleIncrement(item.id)} // Increase item quantity
                              className="px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
                            >
                              +
                            </button>
                          </div>
                          {/* Item total price */}
                          <div className="text-sm font-semibold mt-2 text-blue-600">${item.price * item.quantity}</div>
                        </div>

                        {/* Delete item button */}
                        <button
                          onClick={() => handleRemove(item.id)} // Remove item from cart
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          Delete
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Cart Summary */}
                <div className="mt-4 border-t pt-3 text-right font-semibold text-lg flex justify-between">
                  <span className="block">Total</span>
                  <span className="text-xl text-blue-600">${total}</span>
                </div>
                {/* Checkout button */}
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

          {/* Profile Icon */}
          <div className="hover:text-blue-700 transition duration-200 cursor-pointer">
            <MdPersonOutline size={24} />
          </div>
        </div>
        {/* Last Icon End */}
      </header>
      {/* Header end */}
      <hr />
    </div>
  );
};

export default Navbar;
