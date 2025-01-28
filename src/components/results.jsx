import React from "react";
import { Check } from "lucide-react";

const Results = () => {
  return (
    <div className="flex items-start  max-w-[1380px] mx-auto gap-8 p-8 ">
      <div className="flex-shrink-0 mt-28">
        <h1 className="text-4xl font-bold text-orange-500">Results</h1>
        <div className="w-16 h-1 bg-black mt-4"></div>
      </div>

      <div className="flex items-start gap-3 mt-28">
        <div className="flex-shrink-0 mt-1">
          <Check className="w-6 h-6 text-orange-500" />
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          The app reduced time and fuel people waste while searching for a fuel
          station. The app users became safer and more considerate drivers.
          Driver's License expiry notification assured they renew their licenses
          on time.
        </p>
      </div>
    </div>
  );
};

export default Results;
