import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-[450px] p-8">
      <div className="max-w-7xl mt-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h1 className="text-4xl font-bold mb-10">About</h1>
            <div className="mb-8">
              <div className="h-1 w-16 bg-orange-500 mb-6"></div>
              <div>
                <h2 className="text-xl mb-4">Expertise</h2>
                <p className="text-gray-400">
                  Web Development, UI/UX Design, Digital Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2">
            <p className="mb-6 text-lg">
              As a leading web development agency, we specialize in creating
              cutting-edge digital solutions that transform businesses. Our team
              of expert developers and designers crafts responsive,
              user-friendly websites and web applications that deliver
              exceptional user experiences across all devices.
            </p>
            <p className="mb-8 text-lg">
              We leverage the latest technologies and frameworks including
              React, Next.js, and Tailwind CSS to build scalable,
              high-performance solutions. Our services encompass everything from
              custom website development and e-commerce platforms to progressive
              web applications and content management systems. Each project is
              approached with a focus on security, accessibility, and search
              engine optimization.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center bg-orange-600 text-white px-6 py-3 rounded-2xl hover:bg-orange-700 transition-colors">
                <span className="mr-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="text-xs">Start Your Project</div>
                  <div className="text-sm font-semibold">GET IN TOUCH</div>
                </div>
              </button>

              <button className="flex items-center bg-orange-600 text-white px-6 py-3 rounded-2xl hover:bg-orange-700 transition-colors">
                <span className="mr-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="text-xs">View Our Work</div>
                  <div className="text-sm font-semibold">PORTFOLIO</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
