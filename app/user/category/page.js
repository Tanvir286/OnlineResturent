import React from 'react';
import allData from "../../data/all.json";
import categoryData from "../../data/category.json";

const CategoryPage = () => {
  
    return (
        <div className='bg-banner-white-all'>
            <div className="max-w-container mx-auto py-24">

                {/* Header Section */}
                <div className="flex justify-between">
                    <img src="/images/category/item.png" alt="Category Item" className='' />
                    <button className="text-3xl text-green bg-greentwo py-2 px-4 rounded-full">See all</button>
                </div>

                {/* Static Category Items Section */}
                <div className='flex justify-between flex-wrap gap-4 mt-10'>
                    {categoryData.images.map((image, index) => (
                        <img key={index} src={image} alt={`Category Item ${index + 1}`} className='w-24 h-20' />
                    ))}
                </div>

                {/* Dynamically Rendered Items from allData */}
                <div className='flex justify-between mt-5 flex-wrap gap-4'>
                    {allData.all.slice(0, 9).map((item) => (
                        <div key={item.id} className='w-30 border-2 pb-6 shadow-custom2 rounded-xl'>
                            {/* Item Image */}
                            <img src={item.image || "/images/default.png"} alt={item.title} className='w-full h-[250px] rounded-t-lg' />
                            
                            {/* Item Details */}
                            <div className='flex gap-x-8 items-center justify-center mt-6 px-5'>
                                <div>
                                    <p className='font-dmSans text-six-black text-32 font-semibold'>{item.title}</p>
                                    <p className='text-seven-black font-dmSans text-xl'>{item.subtitle}</p>
                                </div>
                                <p className='font-dmSans text-six-black text-32 font-semibold'>${item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CategoryPage;
