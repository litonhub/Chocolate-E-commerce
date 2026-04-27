import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "./layouts/Container";
import Crumb from "../assets/images/crumb1.png";
import Crumbb from "../assets/images/crumb2.png";
import Choco1 from "../assets/images/choco1.png";
import Choco2 from "../assets/images/choco2.png";
import Choco3 from "../assets/images/choco3.png";
import Choco4 from "../assets/images/choco4.png";
import Choco5 from "../assets/images/choco5.png";
import Choco6 from "../assets/images/choco6.png";
import Choco7 from "../assets/images/choco7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const chocolates = [
  Choco1,
  Choco2,
  Choco3,
  Choco4,
  Choco5,
  Choco6,
  Choco7,
];

const data = [
  { title: "Milk Chocolate", price: "$12", rating: 4.5 },
  { title: "Dark Chocolate", price: "$14", rating: 4.2 },
  { title: "Caramel Chocolate", price: "$16", rating: 4.7 },
  { title: "Ruby Chocolate", price: "$15", rating: 5.0 },
  { title: "Hazelnut Chocolate", price: "$18", rating: 3.8 },
  { title: "White Chocolate", price: "$13", rating: 4.1 },
  { title: "Almond Chocolate", price: "$17", rating: 4.6 },
];


const Banner = () => {
  const [active, setActive] = useState(3); // center

  const getStyle = (index) => {
    let offset = index - active;

    // infinite wrap
    const total = chocolates.length;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return {
      x: offset * 108, // horizontal spacing
      y: Math.abs(offset) * 28, // curve
      scale: offset === 0 ? 1 : 0.9,
      zIndex: 10 - Math.abs(offset),
      opacity: Math.abs(offset) > 3 ? 0 : 1,
    };
  };

  return (
    <section className="bg-bgg py-16 overflow-hidden">
      <Container>
        <div className="relative h-100 flex items-center justify-center">

          {/* crumbs */}
          <img src={Crumbb} className="absolute top-0 left-0" />
          <img src={Crumb} className="absolute top-0 right-0" />

          {chocolates.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              onClick={() => setActive(index)}
              className="absolute cursor-pointer"
              animate={getStyle(index)}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              whileHover={{ scale: 1 }}
            />
          ))}
        </div>

        <div className="pt-16 pb-12">
          <div className="relative w-full flex items-center justify-center">

            {/* Left Arrow */}
            <button className="prev absolute left-0 z-20">
              <IoChevronBackCircleOutline className="text-[#462D16] size-10" />
            </button>

            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              slidesPerView={3}
              centeredSlides={true}
              loop={true}
              spaceBetween={2}
              navigation={{ nextEl: ".next", prevEl: ".prev" }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}

              pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} custom-dot"></span>`;
                },
              }}

              className="custom-swiper w-[95%] py-24"
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  {({ isActive, isPrev, isNext }) => (
                    <div className="flex justify-center items-center min-h-55">

                      <div
                        className={`w-120 h-73 rounded-[1000px] flex flex-col items-center justify-center text-center transition-all duration-300 relative overflow-hidden ${isActive ? "bg-[#1C1209] text-bgg font-pop scale-100 z-20" : "bg-[#1C1209] text-bgg font-pop scale-75 opacity-40"}`}>

                        {/* TITLE */}
                        <h3 className={`transition-all duration-300 ${isActive ? "text-[28px] font-semibold" : "text-lg font-normal"}`}>
                          {item.title}
                        </h3>

                        {/* PRICE */}
                        <p className={`transition-all duration-300 ${isActive ? "text-[28px] font-normal mt-1" : "text-lg font-normal"}`}>
                          {item.price}
                        </p>

                        {/* RATING */}
                        <div
                          className={`flex items-center gap-1 px-7 py-2 font-normal font-pop text-sm rounded-[20px] mt-2 transition-all duration-300 ${isActive ? "bg-[#D1D1D1] text-black text-sm scale-110" : "bg-black/20 text-white text-xs scale-90"}`}>

                          <Star className={`${isActive ? "size-6 text-[#DBAB5B]" : "size-6 text-[#DBAB5B]"}`} fill="currentColor" />
                          {item.rating}
                        </div>

                        {/* BUTTON */}
                        <button
                          className={`mt-4 flex items-center gap-1 rounded-full transition-all duration-300 py-2.5 ${isActive ? "bg-bgg text-black px-4 py-1 text-sm scale-105" : "bg-bgg text-black px-3 py-1 text-xs scale-90"}`}>
                          {isActive ? (
                            <>
                              🛒 Buy Now
                            </>
                          ) : (
                            "Add To Cart"
                          )}
                        </button>

                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Arrow */}
            <button className="next absolute right-0 z-20 ">
              <IoChevronForwardCircleOutline className="text-[#462D16] size-10" />
            </button>
          </div>
          <div className="custom-pagination flex justify-center items-center gap-3 mt-6"></div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;