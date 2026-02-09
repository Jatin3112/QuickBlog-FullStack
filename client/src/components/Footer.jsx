import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#1a1a1a] border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-700 text-gray-400">
        <div>
          <img src={assets.logo} alt="logo" className="w-32 sm:w-44 invert" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500">
        Copyright 2025 © QuickBlog GreatStack - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
