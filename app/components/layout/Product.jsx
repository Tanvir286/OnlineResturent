"use client";

import React from 'react';
import ProductCard from './ProductCard'; 
import data from "../../data/product.json"; 

/*================Redux====================*/
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../lib/slice/cartSlice';
import { useAppSelector } from '../../../lib/hooks'; 
/*================Redux====================*/

const Product = () => {

    /*=========redux===========*/
    const dispatch = useDispatch();

    // Accessing cart details using a selector
    const cartDetails = useAppSelector((state) => state.cartDetails.total);
    

    // Handle adding products to the cart
    const handleClick = (item) => {
        console.log("Product Added:", item);
        dispatch(addToCart(item)); // Dispatching the addToCart action
    };
    /*=========redux===========*/

    return (
        <div className='bg-banner-white-all'>
            <div className='max-w-container mx-auto py-5'>
                <p className='font-figtree text-40 font-bold text-primary-black mb-5 px-4 lg:px-0'>Products</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5'>
                    {data.product.map(product => (
                        <div key={product.id} className=""> {/* Ensure responsive padding and border */}
                            <ProductCard 
                                product={product} 
                                onClick={handleClick} // Passing handleClick to ProductCard
                            />
                        </div>
                    ))}
                </div>                   
            </div>
        </div>
    );
};

export default Product;
