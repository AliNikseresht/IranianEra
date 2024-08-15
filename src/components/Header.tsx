'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Header = () => {
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
        <header className="w-full h-screen flex justify-between flex-wrap lg:flex-nowrap overflow-hidden">
            <div
                className="w-full lg:w-[50rem] flex flex-col items-center justify-center text-center text-[#000] h-full"
                data-aos="fade-right"
            >
                <h1 className="text-9xl font-bold text-[#ab9273]">Iranian Era</h1>
                <h3 className="text-3xl my-3">A journey through Iran's ups and downs history</h3>
                <p className="text-lg">From the distant past to the present day</p>
            </div>
            <div className="relative w-full lg:w-[45rem] h-full flex items-center justify-center">
                <div className={`circle-3d absolute ${showCircle ? 'show' : ''}`} />
                <div className="slider-clip relative w-full h-full" data-aos="fade-left">
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        effect="fade"
                        className="w-full h-full"
                    >
                        {['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5', 'bg-6', 'Tomb-Cyrus', 'hafeziye',].map((bg, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={`/Images/${bg}.jpg`}
                                    alt={`Slide ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
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
                    className="text-[#ab9273] absolute hover:scale-125 duration-500 top-[39%] right-[6%] font-medium rounded-lg text-sm px-2 py-1.5 text-center inline-flex items-center"
                >
                    NEXT
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
