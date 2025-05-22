import React from "react";
import Image from "next/image";
import Link from "next/link";

const RevolutionizeSection = () => {
  return (
    <section className="py-20 bg-[#F0F5FD] px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-[#1a1a3a] font-['Climate_Crisis'] leading-tight">
              Revolutionize
              <br />
              Your Hiring
              <br />
              Process with
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Discover the future of hiring with Recruitly's cutting-edge AI
              technology. Our platform seamlessly connects UK companies with
              top-tier Pakistani talent
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="bg-[#1a1a3a] text-white px-6 py-3 rounded-full font-medium transition-colors hover:bg-[#2d2d5a]"
              >
                Explore Solutions
              </Link>
              <Link
                href="/get-started"
                className="bg-white text-[#1a1a3a] px-6 py-3 rounded-full font-medium border border-[#1a1a3a] transition-colors hover:bg-gray-100"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Laptop Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gradient-to-r from-[#1a1a3a] to-[#7046ca] rounded-lg p-1">
                <Image
                  src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1000&auto=format&fit=crop"
                  alt="Recruitly Platform Demo"
                  width={700}
                  height={450}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionizeSection;
