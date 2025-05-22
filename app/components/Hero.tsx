import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-75px)] w-full flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background image of professionals */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop"
            alt="Professional team"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              mixBlendMode: "soft-light",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#6046ca] to-[#8367ff] z-10"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-wider uppercase font-['Climate_Crisis']">
            Discover the
            <br />
            Power of AI-
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Revolutionize your hiring process with Recruitly&apos;s AI-powered
            solutions. Unlock a new era of smart, efficient, and trustworthy
            talent acquisition
          </p>
          <div className="flex justify-center">
            <Link
              href="/get-started"
              className="bg-white text-[#6046ca] hover:bg-gray-100 transition-colors py-3 px-8 rounded-full font-medium text-lg inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar text */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden lg:block z-20">
        <div className="text-white/70 text-lg font-light">
          <span className="vertical-text">www.recruitly.com</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
