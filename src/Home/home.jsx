import React from "react";
import AboutSection from "../components/aboutus";
import ChallengeSection from "../components/challenge";
import Carousel from "../components/carousel";
import KeyFeatures from "../components/key";
import Results from "../components/results";
import CombinedTechNav from "../components/technav";
import SuccessStories from "../components/success";
import ContactSection from "../components/contact";
import HeroSection from "../components/herosection";

const Home = () => {
    return (
      <>
        <HeroSection/>
        <div>
          <AboutSection />
        </div>
        <div className="bg-gradient-to-b from-gray-900 to-black">
          <ChallengeSection />
        </div>
        <div className="bg-gradient-to-b from-black to-gray-900">
          <Carousel />
        </div>
        <div className="bg-gradient-to-b from-gray-900 to-black">
          <KeyFeatures />
        </div>
        <div className="bg-gradient-to-b from-black to-gray-900">
          <Results />
        </div>
        <div className="bg-gradient-to-b from-gray-900 to-black">
          <CombinedTechNav />
        </div>
        <div className="bg-gradient-to-b from-black to-gray-900">
          <SuccessStories />
        </div>
        <div>
          <ContactSection />
        </div>
      </>
    );
};

export default Home;
