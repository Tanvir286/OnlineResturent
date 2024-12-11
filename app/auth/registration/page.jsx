"use client"
import React, { useState } from 'react';

const RegistrationPage = () => {
    // State hook to toggle the password visibility
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        // Container with a background class for styling
        <div className='bg-banner-white-all'>
            
            {/* Banner image */}
            <img src="/images/banner/sign.png" alt="" />

            {/* Centered container for the form */}
            <div className="flex items-center justify-center py-10">

                {/* Form container with padding and rounded corners */}
                <div className="w-full max-w-sm rounded-lg p-6 border bg-white shadow-xl">
                    
                    {/* Title of the page */}
                    <h2 className="text-4xl font-figtree font-bold text-center text-gray-800 mb-4">Create Account</h2>
                    
                    {/* Form section */}
                    <form>
                        {/* Email input field */}
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
                            />
                        </div>

                        {/* Password input field */}
                        <div className="mb-4 relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'} 
                                id="password"
                                placeholder="Password"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
                            />
                            
                            {/* Password visibility toggle button */}
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}  
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {/* Show an eye or crossed eye based on password visibility */}
                                {passwordVisible ? '🙈' : '👁️'}
                            </button>
                        </div>
                        
                        {/* Password input field */}
                        <div className="mb-4 relative">
                            <input
                                type={passwordVisible ? 'text' : 'password'} 
                                id="password"
                                placeholder="Confirm Password"
                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-orange-200"
                            />
                            
                            {/* Password visibility toggle button */}
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}  
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {/* Show an eye or crossed eye based on password visibility */}
                                {passwordVisible ? '🙈' : '👁️'}
                            </button>
                        </div>

                        {/* Remember me checkbox and forget password link */}
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center text-sm text-gray-600">
                                <input type="checkbox" className="form-checkbox mr-2 font-roboto text-sm" /> Accept all terms & Conditions
                            </label>
                            
                        </div>

                        {/* Submit button for the login form */}
                        <button
                            type="submit"
                            className="w-full bg-orange text-white py-2 rounded-full font-bold hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300"
                        >
                            Create Account
                        </button>
                    </form>

                
                </div>

            </div>
            {/* Centered container for the form */}
        </div>
    );
};

export default RegistrationPage;