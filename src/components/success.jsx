import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      image:
        "https://i.pinimg.com/736x/00/a8/54/00a85462f7845258ad247cbb395cf0e5.jpg",
      title:
        "Transforming Local Retail: From Storefront to Digital Sales Leader",
      description:
        "When a family-owned retail business faced declining foot traffic, we built a sleek, user-friendly e-commerce platform that tripled their sales within six months. Integrated payment gateways, real-time inventory updates, and SEO strategies turned their digital presence into their top revenue generator.",
    },
    {
      image:
        "https://i.pinimg.com/736x/f1/0f/ea/f10feac22b5abcf4e75fab4da43dd33f.jpg",
      title: " Scaling a Startup: A Dynamic Website for Rapid Growth",
      description:
        "A budding fintech startup approached us for a scalable, responsive website. Our team crafted a visually stunning site with custom API integrations and lightning-fast performance. The result? A 200% increase in user sign-ups and a seamless onboarding process that earned them investor confidence.",
    },
    {
      image:
        "https://i.pinimg.com/736x/a0/b7/96/a0b7960d80eb155b8e02bb6ae6d4f51b.jpg",
      title: "Revolutionizing the Healthcare Sector: A Patient-Centric Portal",
      description:
        "We partnered with a leading healthcare provider to design a secure, HIPAA-compliant patient portal. Featuring online appointment scheduling and medical record access, the platform boosted patient satisfaction scores by 40% and streamlined clinic operations..",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  return (
    <div className="max-w-[1380px] mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl text-white font-bold mb-4">Have a look at</h1>
        <h2 className="text-4xl font-bold text-orange-500">
          Our success stories
        </h2>
        <p className="text-gray-300 text-xl mt-4">
          Over the years, Peerbits have delivered several customized solutions
          to their clients across the globe. You can get a closer look at few of
          such success stories here.
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`w-full md:w-1/3 flex-shrink-0 transition-transform duration-300 ease-in-out transform`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-4">{story.title}</h3>
                  <p className="text-black flex-grow">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center gap-4 mt-6">
          <div className="flex gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="bg-orange-500 p-2 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-orange-500 p-2 rounded-full shadow-lg hover:bg-oramge-600 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
