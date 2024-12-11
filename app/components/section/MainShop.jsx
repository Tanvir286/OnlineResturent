"use client";

import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import shopData from "../../data/restaurants";
import ResturentList from './../layout/ResturentList';

const MainShop = () => {
  const handleRestaurantClick = (restaurantData) => {
    console.log(restaurantData);
  };

  return (
    <div className='bg-white-all'>
      <div className='max-w-container mx-auto py-20'>
        {/* Title part */}
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='font-roboto text-5xl font-medium text-five-black'>
              Explore <span className='text-orange'>Restaurants</span>
            </h2>
            <p className='font-kumbhSans font-normal mt-7 text-four-black max-w-214'>
              Check your city Near by Restaurant
            </p>
          </div>
          <div className='relative'>
            <button
              type="submit"
              className="absolute font-kumbhSans text-xl left-1.5 top-1/2 transform -translate-y-1/2 bg-orange flex items-center  text-white rounded-l-full px-2 py-4 "
            >
              <IoLocationSharp className='mr-10' />
              Location
              <IoMdArrowDropdown className='text-base mt-1 ml-1' />
            </button>
            <input
              type="search"
              id="search"
              className="w-[721px] px-3 py-6 pl-[185px] text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <img src="/images/product/search.png" alt="" className='absolute w-10  right-[10px] top-[16px] cursor-pointer' />
          </div>
        </div>
        {/* Product List */}
        <div className='flex justify-between flex-wrap gap-y-5 mt-5'>
          {shopData.restaurant.map((card, index) => (
            <ResturentList
              key={index}
              restaurantData={card} // Pass full restaurant data
              onVisit={handleRestaurantClick} // Pass the handler
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainShop;
