"use client";
import Image from "next/image";
import HomeMain from "./Pages/HomeMain";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[80vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          effect="fade"
          className="w-full h-full"
          loop
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/astro1.png"
                alt="Property 1"
                fill
                className="object-cover brightness-75"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/astro2.png"
                alt="Property 2"
                fill
                className="object-cover brightness-75"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-6xl mx-auto px-4">
          <div className="bg-white bg-opacity-95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
            <form className="flex flex-wrap justify-between items-end gap-6">
              <div className="flex-1 min-w-[200px] group">
                <label className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-blue-600">Location</label>
                <input
                  type="text"
                  placeholder="Select Property"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="flex-1 min-w-[200px] group">
                <label className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-blue-600">Check In</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="flex-1 min-w-[200px] group">
                <label className="block text-sm font-medium text-gray-700 mb-1 transition-colors group-hover:text-blue-600">Check Out</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                >
                  Search Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-32 mb-16 container mx-auto px-4">
        <HomeMain />
      </div>
    </div>
  );
}
