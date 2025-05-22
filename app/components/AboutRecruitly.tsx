import React from "react";

const AboutRecruitly = () => {
  const features = [
    {
      id: 1,
      icon: (
        <div className="text-blue-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span className="text-blue-500 font-medium">Smart Hiring</span>
        </div>
      ),
      title: "Powered by AI",
      description: "Unlock the full potential of your workforce with",
    },
    {
      id: 2,
      icon: (
        <div className="text-blue-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
          <span className="text-blue-500 font-medium">AI Calling Bots</span>
        </div>
      ),
      title: "Streamline Your",
      description: "Experience the power of Recruitly's cutting-edge",
    },
    {
      id: 3,
      icon: (
        <div className="text-blue-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
          <span className="text-blue-500 font-medium">Trust & Speed</span>
        </div>
      ),
      title: "Trust & Speed",
      description:
        "Recruitly delivers unparalleled reliability and efficiency to",
    },
    {
      id: 4,
      icon: (
        <div className="text-pink-500 flex items-center">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
          </svg>
          <span className="text-pink-500 font-medium">Tech-</span>
        </div>
      ),
      title: "Leverage the Latest",
      description: "Revolutionize your talent acquisition strategy with",
    },
  ];

  return (
    <section className="py-16 bg-[#EFF3FA] px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#1E2A4A] font-['Climate_Crisis']">
            About Recruitly
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how Recruitly&apos;s innovative solutions are
            revolutionizing the hiring landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-[#1E2A4A]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutRecruitly;
