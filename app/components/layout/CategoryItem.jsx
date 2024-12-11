"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import allData from "./../../data/all.json";
import categoryData from "./../../data/category.json";

/*================Redux====================*/
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../lib/slice/cartSlice';
import { useAppSelector } from '../../../lib/hooks'; 
/*================Redux====================*/

const CategoryItem = () => {

    const router = useRouter();
    console.log(allData); // Logs the JSON data for debugging.
    console.log(categoryData.images); // Logs the JSON data for debugging.
    
    const handleSeeAllClick = () => {
        router.push('/user/allproduct'); // Adjust the route as needed
    };


     /*=========redux===========*/
     const dispatch = useDispatch();

     const cartDetails = useAppSelector((state) => state.cartDetails.total);
     console.log(cartDetails);
 
     const handleClick = (item) => {
         console.log(item);
         dispatch(addToCart(item)); // Use the action creator
     };
     /*=========redux===========*/

    return (
        <div className=''>
            <div className="max-w-container mx-auto py-10">

                {/* Header Section */}
                <div className="flex justify-between px-3 lg:px-0" onClick={handleSeeAllClick}>
                    <img src="/images/category/item.png" alt="Category Item" className='' />
                    <button className="text-sm sm:text-3xl text-green bg-greentwo py-2 px-4 rounded-full">See all</button>
                </div>

                {/* Static Category Items Section */}
                <div className='lg:flex gap-4 my-10 hidden '>
                    {categoryData.images.map((image, index) => (
                        <img key={index} src={image} alt={`Category Item ${index + 1}`} className='w-24 h-20 border-2 shadow-custom2' />
                    ))}
                </div>

                {/* Dynamically Rendered Items from allData */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 px-3 lg:px-0'>
                    {allData.all.slice(0, 9).map((item) => (
                        <div key={item.id} className='w-full  border-2 pb-6 shadow-custom2 rounded-xl cursor-pointer relative'
                            onClick={() => handleClick(item)}
                        >
                            {/* Item Image */}
                            <img src={item.image || "/images/default.png"} alt={item.title} className='w-full h-[250px] rounded-t-lg' />
                            
                            {/* Item Details */}
                            <div className='flex gap-x-8 items-center justify-center mt-6 px-5'>
                                <div>
                                    <p className='font-dmSans text-six-black text-2xl md:text-32 font-semibold'>{item.title}</p>
                                    <p className='text-seven-black font-dmSans mt-2 lg:mt-0 text-xl'>{item.subtitle}</p>
                                </div>
                                <p className='font-dmSans text-six-black text-xl sm:text-32 font-semibold'>${item.price}</p>
                            </div>
                    
                            {/* image list */}
                            <img 
                                src='/images/cart.png' 
                                alt="Cart Icon" 
                                className='absolute top-3 right-5' 
                            />
                            {/* image list */}
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default CategoryItem;
