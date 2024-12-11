import React from 'react';
import { TbShoppingCartPlus } from "react-icons/tb";

const ProductCard = ({ product, onClick }) => {
    return (
        <div 
            className='relative group cursor-pointer px-4 lg:px-0 w-full'
            onClick={() => onClick(product)} // Attach the onClick event handler
        >
            {/* Product Image */}
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover" 
            />

            {/* Product Info */}
            <p className='font-roboto font-medium text-primary-black text-xl mt-2'>{product.title}</p>
            <p className='font-inter font-normal text-primary-black text-base'>${product.price}</p>

            {/* Cart Icon */}
            <img 
                src='/images/cart.png' 
                alt="Cart Icon" 
                className='absolute top-3 right-5 w-8 h-8 md:w-10 md:h-10' 
            />

            {/* Overlay */}
            <div 
                className=" absolute inset-0  bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <div className="flex flex-col items-center mb-5">
                    <TbShoppingCartPlus className='text-7xl text-white font-bold'/>
                    <p className='font-figtree text-3xl font-bold'>Click here</p>
                    
                </div>
            {/* Overlay */}
               
            </div>
        </div>
    );
};

export default ProductCard;
