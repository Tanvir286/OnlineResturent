"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import shopData from '../../data/restaurants';
import ResturentList from '../../components/layout/ResturentList';

const Shop = () => {

   


    const router = useRouter();

    const handleRestaurantClick = (restaurantData) => {
        console.log(restaurantData);
        router.push(`/user/shop/${restaurantData.id}`);
    };


   /*===(useEffect Start)===*/
    /* UseEffect part start */
   
    /* UseEffect part end */

  return (
    <div className='bg-white-all'>
      <div className='max-w-container mx-auto py-20 px-4'>
        {/* Title Section */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-10'>
          <div className='text-center md:text-left '>
            {/* main title */}
            <h2 className='font-roboto text-4xl md:text-5xl font-medium text-five-black'>
              Explore <span className='text-orange'>Restaurants</span>
            </h2>
            {/* main title */}
            {/* sub title */}
            <p className='font-kumbhSans font-normal mt-4 text-four-black max-w-md'>
              Check your city Near by Restaurant
            </p>
            {/* sub title */}
          </div>
          {/* button */}
        
          <div className='relative mt-6 md:mt-0 '>
            {/* condition */}      
            <button
              type="submit"
              className="absolute font-kumbhSans text-xs sm:text-xl left-1.5 top-1/2 transform -translate-y-1/2 bg-orange flex items-center text-white rounded-l-full px-4 py-2"
            >
                <IoLocationSharp className='mr-2' />
                Location
                <IoMdArrowDropdown className='text-base mt-1 ml-1' />
            </button>
        
            {/* condition */}
            
            <input
              type="search"
              id="search"
              className="w-full lg:w-[721px] px-4 py-4 pl-[185px] text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search restaurants..."
              required
            />
            <img 
              src="/images/product/search.png" 
              alt="Search Icon" 
              className='absolute w-8 right-4 top-1/2 transform -translate-y-1/2 cursor-pointer' 
            />
          </div>
          {/* button */}
        </div>
         {/* Title Section */}
        {/* Restaurant List */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {shopData.restaurant.map((card, index) => (
            <ResturentList
              key={index}
              restaurantData={card}
              onVisit={handleRestaurantClick}
            />
          ))}
        </div>
        {/* Restaurant List */}
      </div>
    </div>
  );
};

export default Shop;