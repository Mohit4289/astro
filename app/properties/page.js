"use client";
import Image from "next/image";
import { FaBed, FaBath, FaWifi, FaParking, FaUtensils } from "react-icons/fa";

export default function Properties() {
  const properties = [
    {
      id: 1,
      name: "Stellar Suite",
      description: "Luxury suite with private observatory and telescope",
      price: "$299/night",
      image: "/astro1.png",
      amenities: ["2 Beds", "1 Bath", "Free WiFi", "Parking", "Kitchen"],
    },
    {
      id: 2,
      name: "Cosmos Cabin",
      description: "Cozy cabin with panoramic skylight views",
      price: "$199/night",
      image: "/astro2.png",
      amenities: ["1 Bed", "1 Bath", "Free WiFi", "Parking", "Kitchen"],
    },
    {
      id: 3,
      name: "Galaxy Villa",
      description: "Spacious villa with professional telescope setup",
      price: "$499/night",
      image: "/astro1.png",
      amenities: ["3 Beds", "2 Baths", "Free WiFi", "Parking", "Kitchen"],
    },
  ];

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "2 Beds":
      case "1 Bed":
      case "3 Beds":
        return <FaBed />;
      case "1 Bath":
      case "2 Baths":
        return <FaBath />;
      case "Free WiFi":
        return <FaWifi />;
      case "Parking":
        return <FaParking />;
      case "Kitchen":
        return <FaUtensils />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <div className="relative h-[50vh] mb-16">
        <Image
          src="/astro1.png"
          alt="Properties"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center">Our Properties</h1>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{property.name}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <p className="text-xl font-bold text-blue-600 mb-4">{property.price}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 mt-16 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Property Features</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaWifi className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">High-Speed WiFi</h3>
              <p className="text-gray-600">Stay connected under the stars</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaParking className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Free Parking</h3>
              <p className="text-gray-600">Convenient on-site parking</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaBed className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Comfortable Beds</h3>
              <p className="text-gray-600">Premium bedding for great sleep</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaUtensils className="text-2xl text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Fully Equipped Kitchen</h3>
              <p className="text-gray-600">Cook your own meals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
