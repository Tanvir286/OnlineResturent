"use client";
import React, { useEffect, useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

/*================Redux====================*/
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../lib/hooks'; 
import { resetCart } from '../../../lib/slice/cartSlice';


/*================Redux====================*/


const BillingInfo = () => {

    const [showModal, setShowModal] = useState(false); 
    const cartDetails = useAppSelector((state) => state.cartDetails);
    console.log(cartDetails);
    
 
     /*=========redux===========*/
     const dispatch = useDispatch();




    const handlePlaceOrder = () => {
        // Show the modal when the order is placed
        setShowModal(true);
        dispatch(resetCart());  
      };
    
      const closeModal = () => {
        // Hide the modal
        setShowModal(false);
      };

    const [total, setTotal] = useState(0); // To store the calculated total

    // This effect will run every time the cartDetails or cartDetails.items changes
    useEffect(() => {
        // If cartDetails has items, calculate the total
        if (cartDetails.items && cartDetails.items.length > 0) {
            const calculatedTotal = cartDetails.items.reduce(
                (total, item) => total + (item.price * item.quantity), 
                0
            );
            setTotal(calculatedTotal); 
        } else {
            setTotal(0); // If there are no items, set the total to 0
        }
    }, [cartDetails.items]); // Re-run effect when cartDetails.items changes

    return (
        <div className="max-w-container mx-auto py-10 px-5">
            {/* Header */}
            <h2 className="font-figtree text-3xl font-bold mb-8 text-center text-gray-800">Billing Information</h2>

            {/* Form container */}
            <div className=" p-8 space-y-8">
                {/* Input Section */}
                <div className="flex gap-x-10">

                    {/* Left part */}
                    <div className="w-[60%] space-y-8">
                        {/* Row 1: First Name, Last Name, Company Name */}
                        <div className="flex space-x-4">
                            {/* First Name */}
                            <div className="w-1/3">
                                <label className="block font-roboto text-base font-medium text-gray-700 mb-2">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your first name"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                />
                            </div>
                            {/* Last Name */}
                            <div className="w-1/3">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Last name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your last name"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                />
                            </div>
                            {/* Company Name */}
                            <div className="w-1/3">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name <span className="text-gray-500">(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Company name"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                />
                            </div>
                        </div>

                        {/* Row 2: Street Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Street Address
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your street address"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>

                        {/* Row 3: Country/Region and State */}
                        <div className="flex space-x-4">
                            {/* Country/Region */}
                            <div className="w-[300px]">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Country / Region
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                >
                                    <option>Select</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                </select>
                            </div>
                            {/* State */}
                            <div className="w-[200px]">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    State
                                </label>
                                <select
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                >
                                    <option>Select</option>
                                    <option>California</option>
                                    <option>New York</option>
                                    <option>Texas</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 4: Email and Phone */}
                        <div className="flex space-x-4">
                            {/* Email */}
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                />
                            </div>
                            {/* Phone */}
                            <div className="w-1/2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right part */}
                    <div className="w-[40%]">
                        {/* Order Summary */}
                        <div className="max-w-[450px] mx-auto bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                            
                            {/* Product Details */}
                            {cartDetails.items.map((item) => (
                                <div key={item.id} className="flex items-center mb-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 rounded"
                                    />
                                    <div className="ml-4">
                                        <p className="font-medium">{item.title} x{item.quantity}</p>
                                        <p className="text-gray-600">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        
                            {/* Shipping & Total */}
                            <div className="border-t pt-4">
                                <div className="flex justify-between text-gray-600 mb-2">
                                    <span>Shipping:</span>
                                    <span className="font-medium">Free</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total:</span>
                                    <span>${total}</span> {/* Show the calculated total */}
                                </div>
                            </div>
                            
                            {/* Payment Method */}
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                                <div className="flex items-center mb-2">
                                    <input
                                        type="radio"
                                        id="cod"
                                        name="paymentMethod"
                                        className="mr-2"
                                    />
                                    <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="paymentMethod"
                                        className="mr-2"
                                    />
                                    <label htmlFor="paypal" className="text-gray-700">Paypal</label>
                                </div>
                            </div>
                        
                            {/* Place Order Button */}
                            <button 
                              className="mt-6 w-full bg-orange rounded-md text-white py-2 px-4 font-bold hover:bg-orange-600 transition"
                              onClick={handlePlaceOrder}
                              >
                                Place Order
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {/* Form container */}
         
            {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                            {/* Modal Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                Order Successfully
                                </h3>
                                <button onClick={closeModal} className="text-gray-500">
                                <IoMdCloseCircle className="text-2xl" />
                                </button>
                            </div>

                            <div className="px-16">
                                <img
                                src="/images/category/tik.png"
                                alt="QR Code"
                                className="w-full"
                                />
                            </div>

                            <hr className="mt-10"/>
                            
                            {/* Modal Content */}
                                <div>
                                    <img
                                    src="/images/category/qr.png"
                                    alt="QR Code"
                                    className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        )}




        </div>
    );
};

export default BillingInfo;
