import React from 'react'
import Container from './layouts/Container'
import Footerlogo from '../assets/images/flogo.png'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import Visa from '../assets/images/Visa.png'
import Discover from '../assets/images/Discover.png'
import Mastercard from '../assets/images/Mastercard.png'
import PayPal from '../assets/images/PayPal.png'

const Footer = () => {

    const footerData = [
        {
            title: "Customer Service",
            links: [
                "Order tracking",
                "Shipping info",
                "Return policy",
                "Gift cards",
                "F&Qs",
            ],
        },
        {
            title: "Company",
            links: ["About us", "Our projects", "Blogs"],
        },
        {
            title: "Contact us",
            links: [
                "liton01766@gmail.com",
                "(+880) 1701054694",
            ],
        },
    ];

    const socials = [
        {
            icon: <FiFacebook />,
            link: "https://www.facebook.com/arfin.sipon",
            color: "text-[#1877F2] hover:bg-[#1877F2]",
        },
        {
            icon: <FaInstagram />,
            link: "https://instagram.com/arfin.sipon",
            color: "text-pink-500 hover:bg-pink-500",
        },
        {
            icon: <FaWhatsapp />,
            link: "https://wa.me/8801701054694",
            color: "text-green-500 hover:bg-green-500",
        },
        {
            icon: <VscGithubAlt />,
            link: "https://github.com/litonhub",
            color: "bg-[#1C1209] hover:bg-black",
        },
    ];

    return (
        <footer>
            <div className="bg-[#1C1209] pt-18 pb-28.5">
                <Container>
                    <div className="flex justify-between">
                        <div>
                            <img src={Footerlogo} alt="logo" />
                        </div>

                        <div className='max-w-87.25 space-y-2'>
                            <h3 className='font-medium text-lg font-pop text-textc'>About VelvetCacao</h3>
                            <p className='defaultfs text-textc'>At VelvetCacao, we believe in indulging your senses with the finest chocolates crafted to perfection. From rich, velvety textures to bold, unique flavors, our chocolates are designed to elevate every moment. Whether you're treating yourself or sharing with loved ones, VelvetCacao brings a taste of luxury to your day.</p>
                        </div>

                        <div className="flex gap-x-14 text-textc">
                            {footerData.map((section, index) => (
                                <div key={index}>
                                    <h2 className="font-semibold font-pop text-lg pb-2">
                                        {section.title}
                                    </h2>
                                    <ul className="space-y-2">
                                        {section.links.map((item, i) => (
                                            <li key={i} className="hover:text-bgg cursor-pointer transition duration-300 defaultfs">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className='space-y-10'>
                            <div className='space-y-2'>
                                <h3 className='font-semibold text-lg font-pop text-textc'>Follow us</h3>
                                <div className="flex gap-4">
                                    {socials.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-8.5 h-8.5 flex items-center justify-center rounded-full bg-white ${item.color} hover:text-white transition duration-300 hover:scale-110`}>
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <h3 className='font-semibold text-lg font-pop text-textc'>Payment accepted</h3>
                                <div className='flex items-center gap-x-4'>
                                    <img src={Visa} alt="PaymentImg" />
                                    <img src={Discover} alt="PaymentImg" />
                                    <img src={Mastercard} alt="PaymentImg" />
                                    <img src={PayPal} alt="PaymentImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-[#C5AC95] py-2.5">
                <p className='defaultfs text-[#1C1209] text-center'>© 2012 - 2026  VelvetCacao  - All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
