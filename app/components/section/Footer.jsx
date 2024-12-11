import React from "react";
// next js components
import Image from "next/image";
// images


const Footer = () => {
  return (
    <section className="bg-[#232323] text-white">
      <div className="max-w-container mx-auto flex px-5 lg:px-0 flex-wrap py-10  lg:py-[75px]">
        <div className="w-full xl:w-40 mb-10 xl:mb-0">
          <div className="w-200 lg:w-250 relative mb-3">
            <img src="/images/logo.png" alt="company-name"  />
          </div>

          <p className="lg:w-335 font-inter text-base  text-third-black mb-5">
            Ecommerce is a free UI Kit from Paperpillar that you can use for
            your personal or commercial project.
          </p>

          <div className="space-x-3">
            <input
              type="text"
              placeholder="Type your email address"
              className="py-3 px-6 rounded-[40px] border border-white bg-transparent max-w-[150px] sm:max-w-full lg:w-280 font-inter text-base font-medium"
            />

            <button className="bg-white text-black rounded-[40px] max-w-[150px] sm:max-w-full px-8 py-3 font-inter text-base font-bold">
              Submit
            </button>
          </div>
        </div>

        <div className="w-49 sm:w-[32%] md:w-24 xl:w-15 mb-10 lg:mb-0">
          <p className="font-figtree font-medium text-xl lg:text-xl mb-5 lg:mb-7">
            Account
          </p>

          <ul className="font-figtree font-normal text-banner-white-all lg:text-lg space-y-2.5 lg:space-y-4">
         
            <li>
              <a href="/auth/login">Login</a>
            </li>

            <li>
              <a href="/user/allproduct">Product</a>
            </li>

            <li>
              <a href="/user/shop">Shop</a>
            </li>

            <li>
              <a href="/user/shop">Coupon</a>
            </li>

            <li>
              <a href="/auth/registration">Registration</a>
            </li>
          </ul>
        </div>

        <div className="w-49 sm:w-[32%] md:w-24 xl:w-15 mb-10 lg:mb-0">
          <p className="font-figtree font-medium text-lg lg:text-xl mb-5 lg:mb-7">
            Quick Link
          </p>

          <ul className="font-figtree  font-normal lg:text-lg space-y-2.5 lg:space-y-4">
            <li>
              <a href="">Privacy Policy</a>
            </li>

            <li>
              <a href="">Terms Of Use</a>
            </li>

            <li>
              <a href="">FAQ</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="w-49 sm:w-[32%] md:w-24 xl:w-15 mb-10 lg:mb-0">
          <p className="font-figtree font-medium text-lg lg:text-xl mb-5 lg:mb-7">
            Support
          </p>

          <ul className="font-figtree font-normal lg:text-lg space-y-2.5 lg:space-y-4">
            <li>
              <a href="">tanvir@gmail.com</a>
            </li>

            <li>
              <a href="">+8801-2398-2877</a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-24 xl:w-15">
          <p className="font-figtree font-medium text-xl mb-7">
            Download App
          </p>

          <div className="flex gap-x-3">
            <div className="w-[90px] md:w-[60px] lg:w-[80px] aspect-square relative">
              <img src="/images/footerone.png" alt="company-name"  />
            </div>

            <div className="space-y-3">
              <a href="" target="_blank" className="block">
                <div className="w-[110px] h-[35px] relative">
                <img src="/images/footertwo.png" alt="company-name"  />
                </div>
              </a>

              <a href="" target="_blank" className="block">
                <div className="w-[110px] h-[35px] relative">
                <img src="/images/footerthree.png" alt="company-name"  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
