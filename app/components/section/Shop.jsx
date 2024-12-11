"use client";
import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import ResturentList from './../layout/ResturentList';
import cardData from "../../data/restaurants.json"; 
import { useRouter } from 'next/navigation';

const Shop = () => {
    
    const router = useRouter();

    const restaurants = cardData.restaurant?.slice(0, 3) || [];  // Slice the first 3 elements

    const handleRestaurantClick = (restaurantData) => {
        router.push(`/user/shop/${restaurantData.id}`);
    };

    const handleSeeAllClick = () => {
        router.push('/user/shop'); // Redirect to the "See All" page
    };

    return (
        <div className='bg-banner-white-all'>
            <div className='max-w-container mx-auto py-24'>
                <div className='flex justify-between px-5'>
                    <div>
                        <h2 className='font-roboto font-normal text-2xl sm:text-3xl md:text-5xl'>
                            Explore <span className='text-orange'>Top Restaurants</span>
                        </h2>
                        <p className='font-kumbhSans font-normal text-four-black text-xs sm:text-2xl mt-4 max-w-324'>
                            Check your city Near by Restaurant
                        </p>
                    </div>
                    <div className='flex items-center gap-x-2 cursor-pointer' onClick={handleSeeAllClick} >
                        <p className='font-kumbhSans text-sm  sm:text-xl text-primary-black'>See All</p>
                        <MdArrowForwardIos className='text-primary-black' />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16'>
                    {restaurants.map((card) => (
                        <div key={card.id} className='px-5 md:px-0'>
                             <ResturentList
                                restaurantData={card} 
                                onVisit={handleRestaurantClick} 
                                description={card.description}
                            />
                        </div>                     
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
