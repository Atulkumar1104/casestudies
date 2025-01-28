import React from "react";
import { CheckCircle } from "lucide-react";

const ChallengeSection = () => {
  const challenges = [
    "The client app, upon registration, stores users' driver's license. An integral feature of the app is to notify a user when his driver's license is about to expire. The challenge augmented when we realized license expiry date tends to differ for user to user.",
    "The app upon registration was to store vehicle and mileage data. However, with so much data on the fly, it soon became evident we have to do something about storing it.",
    "Filtering results to a region, location and sub-filtering them to services/features/facilities.",
  ];

  const solutions = [
    "To make sure The app users receive a notification when their driver's license is about to expire, we employed Android Local Push Notifications—Alarm Manager to set the expiry notification.",
    "To store the vehicle and mileage data created the local SQLite DB and to manage complex filter, we used SQL query with app code.",
  ];

  const Section = ({ title, items }) => (
    <div className="p-8 rounded-lg mb-8">
      <div className="flex gap-12">
        {/* Left side - Title */}
        <div className="w-48 flex-shrink-0">
          <div className="flex flex-col">
            <h2 className="text-4xl text-white font-bold">The</h2>
            <h2 className="text-4xl font-bold text-orange-500">{title}</h2>
            <div className="h-1 w-12 bg-black mt-2"></div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
              <p className="text-gray-300 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1380px] mx-auto p-8">
      <Section title="Challenge" items={challenges} />
      <Section title="Solution" items={solutions} />
    </div>
  );
};

export default ChallengeSection;
