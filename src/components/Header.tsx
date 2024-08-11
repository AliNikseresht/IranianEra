'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';

const Header = () => {
    return (
        <header className="w-full h-screen flex justify-between flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-[50rem] flex flex-col items-center justify-center text-center text-[#000] h-full">
                <h1 className="text-6xl font-bold">Iranian Era</h1>
                <h3 className="text-3xl mt-4">A journey through Iran's ups and downs history</h3>
                <p className="text-lg mt-2">From the distant past to the present day</p>
            </div>
            <div className="relative w-full lg:w-[45rem] h-full flex items-center justify-center">
                <div className="circle-3d absolute" />

                <div className="slider-clip relative w-[100%] h-[100%]">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        effect="fade"
                        className="w-[100%] h-[100%]"
                    >
                        <SwiperSlide>
                            <img src="/Images/bg-1.jpg" alt="Slide 1" className="object-cover w-full h-[40rem]" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/bg-2.jpg" alt="Slide 2" className="object-cover w-full h-[40rem]" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/bg-3.jpg" alt="Slide 3" className="object-cover w-full h-[40rem]" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/bg-4.jpg" alt="Slide 3" className="object-cover w-full h-[40rem]" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/bg-5.jpg" alt="Slide 3" className="object-cover w-full h-[40rem]" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/Images/bg-6.jpg" alt="Slide 3" className="object-cover w-full h-[40rem]" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </header>
    );
};

export default Header;
