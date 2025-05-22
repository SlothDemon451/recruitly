import React from "react";
import Image from "next/image";

const TrustedPartners = () => {
  const partnerPoints = [
    {
      id: 1,
      text: "Discover",
      color: "bg-purple-400",
    },
    {
      id: 2,
      text: "Top-Tier Talent",
      color: "bg-blue-400",
    },
    {
      id: 3,
      text: "Recruitly: Empowering Businesses",
      color: "bg-blue-500",
    },
    {
      id: 4,
      text: "More",
      color: "bg-blue-600",
    },
    {
      id: 5,
      text: "Now",
      color: "bg-gray-800",
    },
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#1E2A4A] font-['Climate_Crisis']">
            Trusted Partners
          </h2>
          <p className="text-gray-500 font-light">Our Valued Partners</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Profile Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-[#1E2A4A] rounded-full overflow-hidden shadow-xl">
              <div className="absolute inset-4 overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop"
                    alt="Partner"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-[#1E2A4A] rounded-full text-xs px-4 py-1 font-medium shadow-md">
                Celine Bala
              </div>
            </div>
          </div>

          {/* Partner Info Section */}
          <div className="lg:w-1/2 space-y-5">
            {partnerPoints.map((point) => (
              <div key={point.id} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full ${point.color} flex items-center justify-center text-white font-bold shadow-md`}
                >
                  {point.id}
                </div>
                <div>{point.text}</div>
              </div>
            ))}

            <div className="pt-6">
              <button className="bg-[#5367F2] hover:bg-[#4254e0] text-white rounded-full px-8 py-3 font-medium transition-colors shadow-md">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
