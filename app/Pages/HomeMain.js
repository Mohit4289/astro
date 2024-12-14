"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Properties</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of luxury astronomical accommodations,
          each offering unique stargazing experiences.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full"
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/astro1.png"
                alt="Property 1"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Luxury Villa</h3>
              <p className="text-gray-600 mb-4">$500/night</p>
              <p className="text-sm text-gray-500 mb-4">
                Experience the best luxury living with modern amenities and perfect stargazing conditions.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/astro1.png"
                alt="Property 2"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Cozy Apartment</h3>
              <p className="text-gray-600 mb-4">$300/night</p>
              <p className="text-sm text-gray-500 mb-4">
                Perfect for a comfortable and affordable stay with great stargazing opportunities.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/astro2.png"
                alt="Property 3"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Beachside Cottage</h3>
              <p className="text-gray-600 mb-4">$400/night</p>
              <p className="text-sm text-gray-500 mb-4">
                Relax and unwind by the serene beach view with excellent stargazing conditions.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/astro1.png"
                alt="Property 4"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Modern Studio</h3>
              <p className="text-gray-600 mb-4">$250/night</p>
              <p className="text-sm text-gray-500 mb-4">
                A perfect blend of style and comfort in the city with great stargazing opportunities.
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Observatory Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-xl p-8 mt-24 hover:shadow-xl transition-shadow duration-300">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors">Astrostops Observatory</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to Astrostops Observatory, where the wonders of the cosmos meet luxury accommodation. 
            Our state-of-the-art facility offers an unparalleled stargazing experience combined with 
            comfortable lodging. Perfect for astronomy enthusiasts and those seeking a unique getaway 
            under the stars.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book Now
          </button>
          <div className="flex gap-4 pt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transform hover:scale-110 transition-all duration-300">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800 transform hover:scale-110 transition-all duration-300">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg transform transition-transform duration-300 hover:scale-105">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            className="w-full rounded-xl overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <Image
                src="/astro1.png"
                alt="Observatory View 1"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/astro2.png"
                alt="Observatory View 2"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Guests Say</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">
                An incredible experience! The stargazing was phenomenal, and the accommodation was top-notch.
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <Image
                    src="/astro1.png"
                    alt="Guest"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-500">Verified Guest</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more testimonials */}
        </Swiper>
      </div>
    </>
  );
}
