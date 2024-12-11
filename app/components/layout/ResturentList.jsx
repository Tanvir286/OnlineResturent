"use client";

import React from 'react';
import { MdOutlineStarPurple500, MdOutlineLocationOn } from 'react-icons/md';

const ResturentList = ({ restaurantData, onVisit }) => {
  const { images, title, rating, location, description } = restaurantData;

  const titleWords = title.split(' ').slice(0, 30).join(' ') + (title.split(' ').length > 30 ? '...' : '');

  return (
    <div className="py-3 px-5   border shadow-custom rounded-md">
      {/* Image */}
      <img src={images[0]} alt={title} className="w-full rounded-md h-[260px]" />
      {/* Title and Rating */}
      <div className="flex justify-between mt-3">
        <p className="font-roboto text-2xl lgtext-32 text-five-black">{titleWords}</p>
        <div className="flex gap-x-3 items-center">
          <MdOutlineStarPurple500 className="text-2xl text-orange" />
          <p className="text-2xl text-five-black">({rating})</p>
        </div>
      </div>
      {/* Location */}
      <div className="flex items-center gap-x-2 mt-2">
        <MdOutlineLocationOn className="text-xl" />
        <p className="font-kumbhSans text-sm text-primary-black font-normal">{location}</p>
      </div>
      {/* Description */}
      <div className="mt-2">
        <p className="font-kumbhSans text-xs text-four-black max-w-436">
          {description} <span className="font-bold text-banner-black ml-1">Read More...</span>
        </p>
      </div>
      {/* Button */}
      <button
        className="text-white bg-green w-full font-bold text-sm py-3 rounded-md mt-2"
        onClick={() => onVisit(restaurantData)} 
      >
        Visit
      </button>
    </div>
  );
};

export default ResturentList;
