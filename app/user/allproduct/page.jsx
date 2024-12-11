"use client";
import React from 'react';
import allData from "../../data/all.json";
import categoryData from "../../data/category.json";

/*================Redux====================*/
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../lib/slice/cartSlice';
import { useAppSelector } from '../../../lib/hooks'; 
/*================Redux====================*/

const AllProductPage = () => {

    console.log(categoryData);
    

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
        <div className='bg-banner-white-all'>
            <div className="max-w-container mx-auto py-1">
                {/* categoty part start */}
                 <h2 className="font-figtree text-40 font-bold my-5 px-4 lg:px-0">Category</h2>

                {/* Static Category Items Section */}
                <div className='flex  flex-wrap gap-4 pb-4 px-4 lg:px-0'>
                    {categoryData.images.slice(0, 5).map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Category Item ${index + 1}`} 
                            className='' 
                        />
                    ))}
                </div>

                {/* Dynamically Rendered Items from allData */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-3 lg:px-0'>
                    {allData.all.map((item) => (
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
                {/* Dynamically Rendered Items from allData */}
            </div>
        </div>
    );
};

export default AllProductPage;
