import React from "react";
import { Check } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      title: "Visual Style",
      content:
        "To hold the innovative mood of the apps overall visual style, we selected a color palette which, as you can see, includes various shades of grey with light colours here and there",
    },
    {
      title: "Nearby stations",
      content:
        "An app user can not only find a filling station near him, he can also navigate to its location and take a look at the services, products and facilities available at the station",
    },
    {
      title: "Mileage",
      content:
        "The app calculates mileage of a vehicle based on the number of miles it travelled. It calculates number of miles it travelled and how much fuel it was refilled with at an The app filling station",
    },
    {
      title: "License",
      content:
        "Omanis often forget to renew their drivers licenses on time and are left with no choice but",
    },
    {
      title: "Visual Style",
      content:
        "To hold the innovative mood of the apps overall visual style, we selected a color palette which, as you can see, includes various shades of grey with light colours here and there",
    },
    {
      title: "Nearby stations",
      content:
        "An app user can not only find a filling station near him, he can also navigate to its location and take a look at the services, products and facilities available at the station",
    },
    {
      title: "Mileage",
      content:
        "The app calculates mileage of a vehicle based on the number of miles it travelled. It calculates number of miles it travelled and how much fuel it was refilled with at an The app filling station",
    },
    {
      title: "License",
      content:
        "Omanis often forget to renew their drivers licenses on time and are left with no choice but",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden max-w-[1380px] mx-auto ">
      {/* Left side - Key Features title */}
      <div className="w-96 bg-gradient-to-b from-gray-900 to-black p-6 shrink-0">
        <h1 className="text-5xl text-white font-bold">
          Key <span className="text-orange-500">features</span>
        </h1>
      </div>

      {/* Right side - Scrollable content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-8 pr-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="mt-1 shrink-0">
                <Check className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-200 mb-2">
                  {feature.title}
                </h2>
                <p className="text-gray-300">{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
