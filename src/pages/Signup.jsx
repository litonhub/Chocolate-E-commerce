import React from "react";
import { motion } from "framer-motion";
import BackgroundImg from "../components/common/BackgroundImg";
import logo from "../assets/images/slogo.png";
import { SlSocialGoogle } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router";
import { CiMail } from "react-icons/ci";
import { HiOutlineEye } from "react-icons/hi2";
import { CiPen } from "react-icons/ci";

const Signup = () => {
  return (
    <BackgroundImg>
      <div className="flex justify-center items-center py-20">
        <div className="bg-bgg min-w-132.5 opacity-90 rounded-[20px] py-12 px-18">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-16" />
          </div>
          <div className="py-4 text-center">
            <h2 className="font-pop text-textcc text-2xl font-semibold pb-2">
              Sign up
            </h2>
            <p className="defaultfs text-textcc">Do you have an account? <Link to="/login" className="font-medium underline cursor-pointer">Log in</Link></p>
          </div>

          <form className="space-y-6">
            <div className="flex flex-col gap-y-2">
              <label className="defaultfs text-textcc">Name <span className="text-[#B83232]">*</span></label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full ps-12 py-3 rounded-[20px] border-[1.5px] border-[#897874] outline-none font-pop font-normal text-[16px] placeholder:text-[#897874]"
                />
                <CiPen className="absolute top-[14.5px] left-4 size-5" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="defaultfs text-textcc">Email <span className="text-[#B83232]">*</span></label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full ps-12 py-3 rounded-[20px] border-[1.5px] border-[#897874] outline-none font-pop font-normal text-[16px] placeholder:text-[#897874]"
                />
                <CiMail className="absolute top-[14.5px] left-4 size-5" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="defaultfs text-textcc">Password <span className="text-[#B83232]">*</span></label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full ps-12 py-3 rounded-[20px] border-[1.5px] border-[#897874] outline-none font-pop font-normal text-[16px] placeholder:text-[#897874]"
                />
                <HiOutlineEye className="absolute top-[14.5px] left-4 size-5" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-[20px] font-pop font-medium text-[16px] bg-[#100A09] text-textc hover:bg-opacity-90 transition duration-300 cursor-pointer"
            >
              Create account
            </button>
          </form>

          <div>
            <div className="flex items-center gap-4 mt-6 mb-4">
              <div className="flex-1 h-px bg-[#6B5651]"></div>
              <span className="defaultfs text-[#2E2E2E]">or</span>
              <div className="flex-1 h-px bg-[#6B5651]"></div>
            </div>
            <div className="flex gap-x-6">
              <button className="flex-1 flex items-center justify-center gap-2 border border-[#897874] rounded-full py-2 hover:bg-[#100A09] hover:text-textc transition-all duration-300 ease-in-out">
                <SlSocialGoogle className="size-5" />
                <h5 className="defaultfs">Google</h5>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-[#897874] rounded-full py-2 hover:bg-[#100A09] hover:text-textc transition-all duration-300 ease-in-out">
                <FiFacebook className="size-5" />
                <h5 className="defaultfs">Facebook</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImg>
  );
};

export default Signup;