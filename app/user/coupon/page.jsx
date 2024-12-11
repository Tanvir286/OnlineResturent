import React from "react";

const CouponCardsPage = () => {
  return (
    <section className="max-w-container mx-auto py-10 px-28">
      <h4 className="text-black font-figtree font-bold text-5xl font-p mb-10">
        Coupon Cards
      </h4>

      {/* Single Discount Card */}
      <div className="relative flex items-center py-7 px-[120px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mb-10 bg-white">
        {/* Left Cut-Out */}
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md"></div>
        {/* Right Cut-Out */}
        <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md"></div>

        <div className="w-[30%] py-10 border-r-[5px] border-dashed border-[#e4e4e4]">
          <h3 className="text-green text-[70px] font-roboto font-medium leading-none mb-1">
            Price
          </h3>
          <h3 className="text-orange text-[70px] mt-3 font-roboto font-medium leading-none">
            $ 10.99
          </h3>
        </div>

        <div className="w-[70%] pl-20">
          <h3 className="text-dmSans text-[60px] font-bold leading-none">
            Single Discount
          </h3>
          <h3 className="text-dmSans text-[40px] mt-2 text-third-black leading-none ">
            Customer takes 6 discount
          </h3>
        </div>
      </div>

      {/* Unlimited Discount Card */}
      <div className="relative flex items-center py-7 px-[120px] rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-white">
        {/* Left Cut-Out */}
        <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md"></div>
        {/* Right Cut-Out */}
        <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md"></div>

        <div className="w-[30%] py-10 border-r-[5px] border-dashed border-[#e4e4e4]">
          <h3 className="text-green text-[70px] font-roboto font-medium leading-none mb-1">
            Price
          </h3>
          <h3 className="text-orange mt-3 text-[70px] font-roboto font-medium leading-none">
            $ 34.99
          </h3>
        </div>

        <div className="w-[70%] pl-20">
          <h3 className="text-dmSans text-[60px] font-bold leading-none">
            Unlimited Discount
          </h3>
          <h3 className="text-dmSans text-[40px] text-third-black mt-2 leading-none mt-3">
            Customer get unlimited discount in one month
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CouponCardsPage;
