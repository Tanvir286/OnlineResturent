import React from "react";
// react icons
import { IoIosSearch, IoMdArrowDropdown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const SearchBox = ({color}) => {
  return (
    <div className="w-full flex items-center rounded-[40px] p-1 border border-primary-border relative ">
      <div className={`absolute top-0 bottom-0 m-1 left-0 hidden sm:flex items-center justify-between w-[180px] lg:w-[160px] 2xl:w-[180px] ${color === "secondary" ? "bg-green" : "bg-orange"} text-white px-4 rounded-l-[40px] rounded-r-[4px]`}>
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

      <button className={`${color === "secondary" ? "bg-green" : "bg-orange"} text-white  text-xl 2xl:text-3xl rounded-full p-2 2xl:p-3 absolute top-2/4 -translate-y-2/4 right-1 lg:right-2`}>
        <IoIosSearch />
      </button>
    </div>
  );
};

export default SearchBox;
