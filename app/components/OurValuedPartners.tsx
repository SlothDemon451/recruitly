import React from "react";
import Link from "next/link";

const OurValuedPartners = () => {
  const partners = [
    {
      id: 1,
      name: "Noucondsite",
      description:
        "Helping us deliver exceptional talent solutions to our mutual clients with innovative technology.",
      logo: "/images/partner1.svg",
      color: "#1a2a4a",
    },
    {
      id: 2,
      name: "nerueccruiter",
      description:
        "Partnering to create seamless recruitment experiences and optimize hiring workflows.",
      logo: "/images/partner2.svg",
      color: "#6046ca",
    },
    {
      id: 3,
      name: "Shell",
      description:
        "Recruitly is proud to partner with Shell, a global leader in the energy industry, to streamline their hiring process and connect them with top talent.",
      logo: "/images/partner3.svg",
      color: "#1a2a4a",
    },
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#1E2A4A] font-['Climate_Crisis']">
            Our Valued Partners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Recruitly partners with leading brands to deliver exceptional hiring
            solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#f0f4f8] rounded-lg overflow-hidden shadow-md"
            >
              <div className="h-40 bg-gradient-to-r from-[#1a2a4a] to-[#6046ca] relative flex items-center justify-center p-6">
                <div className="w-12 h-12 rounded-full bg-white/10 absolute top-4 left-4 flex items-center justify-center">
                  {partner.id === 1 && (
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                  {partner.id === 2 && (
                    <svg
                      className="w-6 h-6 text-purple-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                    </svg>
                  )}
                  {partner.id === 3 && (
                    <svg
                      className="w-6 h-6 text-blue-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-white text-2xl font-bold font-['Climate_Crisis']">
                  {partner.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-6 min-h-[60px]">
                  {partner.description}
                </p>
                <Link
                  href="#"
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuedPartners;
