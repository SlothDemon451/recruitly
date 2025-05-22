import React from "react";
import Link from "next/link";

const GetInTouch = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Email",
      subtitle: "info@recruitly",
      accent: "Phone",
    },
    {
      id: 2,
      title: "+44 (0) 7123 456 789",
      subtitle: "Address",
      description: "123 Main Street",
    },
    {
      id: 3,
      title: "Social",
      subtitle: "Connect with us on social media:",
      description: "@recruitly (Twitter, LinkedIn, Instagram)",
    },
    {
      id: 4,
      title: "Careers",
      subtitle: "Join Our Team",
      accent: "Work",
    },
  ];

  return (
    <section className="py-20 bg-[#121F52] px-4 md:px-8 lg:px-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-white font-['Climate_Crisis'] text-center">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div
              key={info.id}
              className="bg-[#1a2a4a]/40 backdrop-blur-sm p-6 rounded-md"
            >
              <h3 className="text-lg font-medium mb-2">{info.title}</h3>
              <p className="text-white/70 text-sm mb-4">{info.subtitle}</p>
              {info.description && (
                <p className="text-white/70 text-sm">{info.description}</p>
              )}
              {info.accent && (
                <h4 className="text-2xl font-bold mt-4 font-['Climate_Crisis'] text-white">
                  {info.accent}
                </h4>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="border border-white/30 text-white hover:bg-white/10 transition-colors px-8 py-3 rounded-full font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
