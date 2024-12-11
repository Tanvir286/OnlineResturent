import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import FeatureItem from '../layout/FeatureItem';



const Banner = () => {
    return (
        <div className='bg-primary-white'>
            {/* Main container with a white background color */}
            <div className='max-w-container relative mx-auto py-[120px] bg-primary flex flex-col-reverse xl:flex-row items-center pb-10'>
               
                 {/* left part */}
                <div className="w-full xl:w-[55%]">
                    {/* title */}
                    <h1 className="font-roboto text-center xl:text-start text-5xl xl:text-6xl 2xl:text-[96px] font-bold text-banner-black leading-tight mb-2.5 xl:mb-5 2xl:mb-10 mt-5 xl:mt-0">
                        Good <span className="text-orange">food</span>, Great Memories
                    </h1>
                    
                    {/* subtitle */}
                    <p className="font-dmSans text-center xl:text-left text-2xl md:text-36 xl:max-w-821 text-primary-black mb-5">
                        Enable diners to customize their booking by requesting a specific table location or view.
                    </p>
                    
                     {/* searchbox */}
                    <div className="w-full sm:w-[85%] mx-auto px-5 sm:px-0 xl:mx-0 md:w-[500px] lg:w-[600px] xl:w-[550px] 2xl:w-[700px]">
                        
                        
                        <div className="w-full flex items-center rounded-[40px] p-1 border border-primary-border relative">
                           
                            
                            <div className="absolute top-0 bottom-0 m-1 left-0 hidden sm:flex items-center justify-between w-[180px] lg:w-[160px] 2xl:w-[180px] bg-green text-white px-4 rounded-l-[40px] rounded-r-[4px]">
                               
                                
                                <FaLocationDot className="text-sm xl:text-xl" />
                               
                                
                                <div className="flex items-center gap-x-1">
                                    
                                    <p className="font-secondary-font text-sm 2xl:text-xl leading-[110%]">Location</p>
                                    <IoMdArrowDropdown className="text-sm 2xl:text-2xl -rotate-90" />
                                </div>
                            </div>

                            <input
                                type="text"
                                placeholder="Enter your preferred restaurant location"
                                className="border-none outline-none w-full pl-5 sm:pl-[200px] py-2 2xl:py-4 rounded-[40px] text-sm lg:text-base 2xl:text-xl font-primary-font"
                            />
                           
                            <button className="bg-green text-white text-xl 2xl:text-3xl rounded-full p-2 2xl:p-3 absolute top-2/4 -translate-y-2/4 right-1 lg:right-2">
                                <IoIosSearch />
                            </button>
                            
                        </div>
                    </div>
                     {/* searchbox */}
                </div>
                 {/* left part */}
                 {/* right part */}
                <div className="w-full lg:w-[45%]">                  
                    <div className="relative w-[60%] lg:w-[80%] xl:w-full mx-auto">                      
                        <img src="/images/banner.png" alt="" />                       
                    </div>
                </div>
                {/* right part */}

                <img src="/images/bannerarrow.png" alt="" className='absolute top-8 left-[350px] hidden xl:block'/>

            </div>
             
            {/* box part start */}
            <div className="flex justify-center mt-16">
                <div className="grid gap-6 bg-white px-14 py-5 shadow-xl xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    <FeatureItem 
                        imageSrc="/images/banner/discount.png" 
                        title="Discount" 
                        description="Every week new sales" 
                    />
                    <FeatureItem 
                        imageSrc="/images/banner/truck.png" 
                        title="Free Delivery" 
                        description="100% Free for all orders" 
                    />
                    <FeatureItem 
                        imageSrc="/images/banner/time.png" 
                        title="Great Support 24/7" 
                        description="We care your experiences" 
                    />
                    <FeatureItem 
                        imageSrc="/images/banner/secure.png" 
                        title="Secure Payment" 
                        description="100% Secure Payment Method" 
                    />
                </div>

            </div>
            {/* box part end */}

        </div>
    );
};

export default Banner;
// Exporting the Banner component for use in other parts of the application
