"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import Image from "next/image";

const Header: React.FC = () => {
  const [showCircle, setShowCircle] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1100 });

    const timer = setTimeout(() => {
      setShowCircle(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <header className="bg-secondary flex h-screen w-full flex-wrap justify-between overflow-hidden lg:flex-nowrap">
      <div
        className="flex md:h-full w-full flex-col items-center justify-center text-center text-[#000] lg:w-[50rem]"
        data-aos="fade-right"
      >
        <h1 className="text-5xl md:text-9xl font-bold text-accent">Iranian Era</h1>
        <h3 className="my-3 text-xs md:text-3xl">
          A journey through Iran&apos;s ups and downs history
        </h3>
        <p className="text-sm md:text-lg">From the distant past to the present day</p>
      </div>
      <div className="hidden md:flex relative h-full w-full items-center justify-center lg:w-[45rem]">
        <div className={`circle-3d absolute ${showCircle ? "show" : ""}`} />
        <div
          className="slider-clip relative h-full w-full"
          data-aos="fade-left"
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            effect="fade"
            className="h-full w-full"
          >
            {[
              "bg-1",
              "bg-2",
              "bg-3",
              "bg-4",
              "bg-5",
              "bg-6",
              "Tomb-Cyrus",
              "hafeziye",
            ].map((bg, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`/Images/${bg}.jpg`}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          data-aos="fade-left"
          type="button"
          onClick={handleNextSlide}
          className="absolute right-[6%] top-[39%] inline-flex items-center rounded-lg px-2 py-1.5 text-center text-sm font-medium text-[#ab9273] duration-500 hover:scale-125"
        >
          NEXT
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
