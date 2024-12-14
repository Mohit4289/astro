"use client";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: "/astro1.png", title: "Night Sky View" },
    { id: 2, src: "/astro2.png", title: "Observatory" },
    { id: 3, src: "/astro1.png", title: "Luxury Suite" },
    { id: 4, src: "/astro2.png", title: "Telescope Setup" },
    { id: 5, src: "/astro1.png", title: "Stargazing Deck" },
    { id: 6, src: "/astro2.png", title: "Dining Area" },
    { id: 7, src: "/astro1.png", title: "Bedroom View" },
    { id: 8, src: "/astro2.png", title: "Lounge Area" },
    { id: 9, src: "/astro1.png", title: "Garden" },
  ];

  const categories = ["All", "Observatory", "Accommodation", "Amenities"];
  
  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-16">
        <Image
          src="/astro1.png"
          alt="Gallery"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">Our Gallery</h1>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-72">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-[80vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
