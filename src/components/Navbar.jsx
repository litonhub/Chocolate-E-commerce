import React from 'react'
import Container from './layouts/Container'
import Logo from '../assets/images/logo.png'
import { PiShoppingCartLight } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

  const menus = [
    "Home",
    "All Products",
    "Flavors",
    "Contact us",
    "About us",
  ];

  return (
    <nav className='bg-bgg py-5'>
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-12.5 items-center">
            <img src={Logo} alt="logo" />
            <div className="flex gap-x-4 items-center font-pop text-sm font-normal">
              <button className='border border-btn py-2.25 px-7.5 text-[#34231F] rounded-[20px] hover:bg-btn hover:text-[#F5F5F5] transition-all duration-300 ease-in-out'>Login</button>
              <button className='border border-btn py-2.25 px-6 text-[#34231F] rounded-[20px] hover:bg-btn hover:text-[#F5F5F5] transition-all duration-300 ease-in-out'>Sign up</button>
            </div>
          </div>

          <div className="flex gap-x-6">
            {menus.map((item, index) => (
              <p
                key={index}
                className="cursor-pointer text-[#6B5651] defaultfs hover:font-medium hover:text-[#100A09] hover:transition hover:duration-300 hover:ease-in-out">
                {item}
              </p>
            ))}
          </div>

          <div className='flex items-center gap-x-4'>
            <div className="relative">
              <input type="text" placeholder='Search' className='bg-[#C4BBB9] py-2.75 ps-12 outline-0 rounded-[20px] shadow-[rgba(46,46,46,0.8)] font-pop font-medium text-sm' />
              <CiSearch className='size-6 text-[#2E2E2E] absolute top-2.5 left-4 cursor-pointer' />
            </div>
            <div className="flex gap-x-4">
              <div className="relative">
                <PiShoppingCartLight className='size-6 text-[#2E2E2E] cursor-pointer' />
                <div className='bg-[#B83232] w-4 h-4 rounded-full flex justify-center items-center absolute -top-3 -right-2.5 text-white font-pop font-normal text-[10px]'>3</div>
              </div>
              <HiOutlineUserCircle className='size-6 text-[#2E2E2E] cursor-pointer' />
            </div>
          </div>
        </div>

      </Container>
    </nav>
  )
}

export default Navbar