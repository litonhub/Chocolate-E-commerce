import React from "react";
import BackgroundImg from "../components/common/BackgroundImg";
import logo from "../assets/images/slogo.png";
import { Link } from "react-router";
import { HiOutlineEye } from "react-icons/hi2";
import { FaArrowLeftLong } from "react-icons/fa6";

const Createpass = () => {

  return (
    <BackgroundImg>
      <div className="flex justify-center items-center py-34">
        <div className="bg-bgg min-w-132.5 opacity-90 rounded-[20px] py-12 px-18">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-16" />
          </div>
          <div className="max-w-78 py-6 mx-auto text-center">
            <h2 className="font-pop text-textcc text-2xl font-semibold pb-2">
              Set a password
            </h2>
            <p className="defaultfs text-textcc">Your previous password has been reset. Please set a new password for your account.</p>
          </div>

          <form className="space-y-5">
            <div className="flex flex-col gap-y-2">
              <label className="defaultfs text-textcc">Create new password</label>
              <div className="relative">
                <input
                type="text"
                placeholder="Enter password"
                className="w-full ps-12 py-3 rounded-[20px] border-[1.5px] border-[#897874] outline-none font-pop font-normal text-[16px] placeholder:text-[#897874]"
              />
              <HiOutlineEye className="absolute top-[14.5px] left-4 size-5" />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label className="defaultfs text-textcc">Confirm new password</label>
              <div className="relative">
                <input
                type="email"
                placeholder="Re-enter password"
                className="w-full ps-12 py-3 rounded-[20px] border-[1.5px] border-[#897874] outline-none font-pop font-normal text-[16px] placeholder:text-[#897874]"
              />
              <HiOutlineEye className="absolute top-[14.5px] left-4 size-5" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-[20px] font-pop font-medium text-[16px] bg-[#100A09] text-textc hover:bg-opacity-90 transition duration-300 cursor-pointer"
            >
              Set password
            </button>
          </form>
          <div className="flex items-center gap-x-1 justify-center text-[#100A09] pt-9">
              <FaArrowLeftLong className="size-4.5 cursor-pointer" />
              <Link to="/login" className="defaultfs">Back to login</Link>
          </div>
        </div>
      </div>
    </BackgroundImg>
  );
};

export default Createpass;
