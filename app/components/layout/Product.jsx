"use client";

import React from 'react';
import ProductCard from './ProductCard'; 
import data from "../../data/product.json"; 

/*================Redux====================*/
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../lib/slice/cartSlice';
import { useAppSelector } from '../../../lib/hooks'; 
/*================Redux====================*/
/*================toastify====================*/
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/*================toastify====================*/


const Product = () => {
    /*=========redux===========*/
    const dispatch = useDispatch();

    // Accessing cart details using a selector
    const cartDetails = useAppSelector((state) => state.cartDetails.total);

    // Handle adding products to the cart
    const handleClick = (item) => {
        console.log("Product Added:", item);
        dispatch(addToCart(item)); // Dispatching the addToCart action

        // Display success toast notification
        toast.success(`${item.title} added to cart!`, {
        
            position: "top-right",
            autoClose: 3000, // Close after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
                marginTop: '70px', 
                marginRight: '10px',
            },
        });
    };

    return (
        <div className='bg-banner-white-all'>
            <ToastContainer /> 
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
