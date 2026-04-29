import React from "react";
import BackgroundImg from "../components/common/BackgroundImg";
import logo from "../assets/images/slogo.png";
import { Link } from "react-router";
import { CiMail } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

const Forget = () => {

  return (
    <BackgroundImg>
      <div className="flex justify-center items-center py-50">
        <div className="bg-bgg min-w-132.5 opacity-90 rounded-[20px] py-12 px-18">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-16" />
          </div>
          <div className="max-w-75 py-4 mx-auto text-center">
            <h2 className="font-pop text-textcc text-2xl font-semibold pb-2">
              Forget your password?
            </h2>
            <p className="defaultfs text-textcc">Don’t worry, happens to all of us. Enter your email below to recover your password</p>
          </div>

          <form className="space-y-8">
            <div className="flex flex-col gap-y-2">
              <label className="defaultfs text-textcc">Email</label>
              <div className="relative">
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full ps-12 py-3 rounded-[20px] border-[1.5px] border-[#897874] outline-none font-pop font-normal text-[16px] placeholder:text-[#897874]"
              />
              <CiMail className="absolute top-[14.5px] left-4 size-5" />
              </div>
            </div>
            <Link to="/verify"
              type="submit"
              className="py-3 px-41 rounded-[20px] font-pop font-medium text-[16px] bg-[#100A09] text-textc hover:bg-opacity-90 transition duration-300 cursor-pointer"
            >
              Submit
            </Link>
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

export default Forget;