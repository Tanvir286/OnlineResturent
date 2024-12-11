"use client";

import { useParams } from 'next/navigation';
import shopData from '../../../data/restaurants';
import { MdLocationPin } from "react-icons/md";
import CategoryItem from './../../../components/layout/CategoryItem';
import Slider from "react-slick";  // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-theme styles
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

const RestaurantDetail = () => {
  const { id } = useParams(); // Get the id from URL parameters
  const sliderRef = useRef(null); // Ref for the slider

  // Find the restaurant that matches the id
  const restaurant = shopData.restaurant.find(item => item.id.toString() === id);

  if (!restaurant) {
    return (
      <div className="bg-white-all">
        <div className="max-w-container mx-auto py-20">
          <h1>Restaurant Not Found</h1>
        </div>
      </div>
    );
  }

  // Destructuring restaurant data for easier use
  const { title, location, description, rating, images } = restaurant;

  // Slider settings
  const sliderSettings = {
    dots: false, // Disable dots navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    arrows: false, // Disable default arrows
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 1000, // Interval for auto-sliding (3000ms = 3 seconds)
  };
  

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="bg-white-all">
      <div className="max-w-container mx-auto py-20">
        <div className="px-5 lg:px-0">
          {/* Restaurant image slider */}
          <div className="relative w-full">
            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl bg-green text-white  p-2 z-10"
            >
              <IoIosArrowBack className='text-xl' />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl bg-green text-white  p-2 z-10"
            >
              <IoIosArrowForward className='text-xl' />
            </button>

            <Slider {...sliderSettings} ref={sliderRef}>
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Restaurant Image ${index + 1}`}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Title part */}
          <p className="font-roboto pb-2 font-medium text-32 sm:text-40 mt-2 border-b-2 border-third-black">
            <span className="text-green">{title.split(" ")[0]}</span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </p>

          {/* Location and Description */}
          <div className="sm:flex justify-between mt-5">
            {/* Left part - Location */}
            <div className="sm:w-[50%]">
              <div className="flex gap-x-2">
                <MdLocationPin className="text-green text-2xl mt-1" />
                <p className="font-kumbhSans font-normal text-2xl max-w-382 text-five-black">
                  {location}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center mt-3">
                <div className="flex items-center ml-2 text-3xl">
                  <span className="text-orange">{'★'.repeat(Math.floor(rating))}</span>
                  <span className="text-gray-500">{'★'.repeat(5 - Math.floor(rating))}</span>
                  <p className="font-kumbhSans text-xl text-black ml-2">{rating}</p>
                </div>
              </div>
            </div>

            {/* Right part - Description */}
            <div className="sm:w-[50%] mt-5 sm:mt-0">
              <p className="font-kumbhSans text-2xl text-five-black">{description}</p>
            </div>
          </div>
        </div>

        {/* Category item */}
        <CategoryItem />
      </div>
    </div>
  );
};

export default RestaurantDetail;
