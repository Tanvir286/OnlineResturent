import React from 'react';

const ProductCard = ({ product, onClick }) => {
    return (
        <div 
            className='cursor-pointer relative px-4 lg:px-0 w-full'
            onClick={() => onClick(product)} // Attach the onClick event handler
        >
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover" 
            />
            <p className='font-roboto font-medium text-primary-black text-xl mt-2'>{product.title}</p>
            <p className='font-inter font-normal text-primary-black text-base'>${product.price}</p>

            <img 
                src='/images/cart.png' 
                alt="Cart Icon" 
                className='absolute top-3 right-5 w-8 h-8 md:w-10 md:h-10' 
            />
        </div>
    );
};

export default ProductCard;
