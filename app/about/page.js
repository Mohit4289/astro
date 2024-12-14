"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-16">
        <div className="absolute inset-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            className="h-full"
          >
            <SwiperSlide>
              <Image
                src="/astro1.png"
                alt="Observatory"
                fill
                className="object-cover brightness-50"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/astro2.png"
                alt="Observatory"
                fill
                className="object-cover brightness-50"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">About Astrostops</h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Astrostops, we believe in creating unforgettable experiences that combine 
              the wonder of astronomy with luxurious comfort. Our mission is to provide 
              a unique space where guests can explore the cosmos while enjoying world-class 
              accommodations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Founded by astronomy enthusiasts, we've carefully designed each property 
              to offer optimal stargazing conditions alongside modern amenities and 
              comfort.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/astro1.png"
              alt="Our Mission"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Prime Location</h3>
              <p className="text-gray-600">
                Carefully selected locations away from light pollution for optimal 
                stargazing conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Professional astronomers available to guide you through your 
                celestial observations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Luxury Comfort</h3>
              <p className="text-gray-600">
                Modern amenities and comfortable accommodations for a perfect 
                stay under the stars.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/astro1.png"
                alt="Team Member"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Founder & Lead Astronomer</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/astro2.png"
                alt="Team Member"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Property Manager</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/astro1.png"
                alt="Team Member"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold">Mike Johnson</h3>
            <p className="text-gray-600">Guest Experience Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}
