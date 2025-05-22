import React from "react";
import Link from "next/link";

const TrustedBy = () => {
  const services = [
    {
      id: 1,
      icon: (
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 16.5L6 13.91l1.41-1.41 3.18 3.18 6-6L18 11.09l-7.41 7.41z" />
          </svg>
        </div>
      ),
      title: "Streamline your hiring process with",
      description:
        "Discover how Recruitly's advanced technology can transform your talent acquisition strategy and drive your",
      buttonText: "Learn More",
    },
    {
      id: 2,
      icon: (
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
        </div>
      ),
      title: "Revolutionize your hiring with Recruitly's AI-",
      description:
        "Experience the power of Recruitly's cutting-edge technology to unlock the full potential of your workforce",
      buttonText: "Explore Now",
    },
    {
      id: 3,
      icon: (
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-blue-400"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm3.2 12.37l-3.75 3.75-1.9-1.9c-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0l.84.84 2.69-2.69c.29-.29.77-.29 1.06 0 .29.3.29.77 0 1.06z" />
          </svg>
        </div>
      ),
      title: "Trust and Speed",
      description:
        "Recruitly's platform delivers unparalleled reliability and efficiency to transform your hiring process",
      buttonText: "Learn More",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#121F52] to-[#A573FF] px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative curve elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 500"
          className="opacity-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,300 700,0 1000,100 L1000,500 L0,500 Z"
            fill="none"
            stroke="#4F83FF"
            strokeWidth="2"
          />
          <circle cx="600" cy="130" r="10" fill="#4F83FF" />
          <circle cx="250" cy="250" r="6" fill="#4F83FF" />
          <circle cx="800" cy="300" r="8" fill="#4F83FF" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white font-['Climate_Crisis']">
            Trusted by
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#182449] rounded-lg p-8 border border-[#293766] shadow-lg"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-blue-100/60 text-sm mb-6 min-h-[60px]">
                {service.description}
              </p>
              <Link
                href="#"
                className="inline-block bg-[#567CEA] hover:bg-[#4A6FE7] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {service.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
