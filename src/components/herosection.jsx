import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your image URLs here
  const backgroundImages = [
    "https://i.pinimg.com/736x/0e/07/80/0e0780cec5095b930a6e5043d683ec03.jpg",
    "https://i.pinimg.com/736x/13/e0/48/13e0485bb8e745b87b5cc84338c553b9.jpg",
    "https://i.pinimg.com/736x/b4/0f/7c/b40f7c98de83845c8c0217fb4dbfb787.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[560px] overflow-hidden">
      {/* Background images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-black/80" />

      {/* Content */}
      <div className="relative flex items-center justify-center p-4 min-h-[560px]">
        <div className="max-w-5xl w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center leading-tight">
            From Concept to Code: The Full-Service Web Garage
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
