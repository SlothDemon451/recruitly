import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 7h-3a2 2 0 0 0-2 2v.5"></path>
            <path d="M14 10.5V14a2 2 0 0 0 2 2h3"></path>
            <path d="M14 14a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2"></path>
            <path d="M12 14v4c0 1.1.9 2 2 2"></path>
            <path d="M12 14a2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2"></path>
            <path d="M12 14v4"></path>
            <path d="M12 14H8"></path>
            <path d="M18 20.5A2.5 2.5 0 0 1 15.5 18"></path>
            <path d="M18 14v0a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v0"></path>
            <path d="M18 9V7a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"></path>
          </svg>
        </div>
      ),
      title: "Smart Hiring",
      description: "Unlock the full potential of your workforce with",
    },
    {
      id: 2,
      icon: (
        <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.44 3.02L2.98 10.48c-.94.94-.94 2.47 0 3.41l7.59 7.59c.94.94 2.47.94 3.41 0l7.59-7.59c.94-.94.94-2.47 0-3.41l-7.59-7.59c-.94-.94-2.47-.94-3.41 0Z"></path>
            <path d="M14.5 12.5 12 15"></path>
            <path d="M18.01 8.99 15.5 11.5"></path>
            <path d="M8.53 18.47l-2.55 2.55"></path>
            <path d="M15.49 6.51 9.51 12.49"></path>
            <path d="M15.5 11.5 12 15"></path>
            <path d="M8.99 18.01 12 15"></path>
          </svg>
        </div>
      ),
      title: "AI Calling",
      description: "Streamline your hiring process with Recruitly's",
    },
    {
      id: 3,
      icon: (
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
      ),
      title: "Trust & Reliability",
      description: "Experience the reliability and efficiency of Recruitly's",
    },
    {
      id: 4,
      icon: (
        <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
      ),
      title: "Tech-Driven",
      description:
        "Leverage the latest technology to revolutionize your talent",
    },
  ];

  return (
    <section className="py-16 bg-white px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center flex flex-col items-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 font-['Climate_Crisis'] text-[#1a1a3a]">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
