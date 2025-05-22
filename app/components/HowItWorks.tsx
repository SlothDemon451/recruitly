import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Register Your Company",
      description:
        "Create an account and set up your company profile with job requirements and preferences.",
    },
    {
      id: 2,
      number: "02",
      title: "AI Matching",
      description:
        "Our intelligent algorithm searches and identifies the best candidates matching your criteria.",
    },
    {
      id: 3,
      number: "03",
      title: "Interview Process",
      description:
        "Connect with pre-vetted candidates through our platform and conduct interviews.",
    },
    {
      id: 4,
      number: "04",
      title: "Hire & Onboard",
      description:
        "Select your ideal candidate and use our tools to streamline the onboarding process.",
    },
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#1a1a3a] font-['Climate_Crisis']">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple four-step process makes hiring top talent quick and
            efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {/* Connect lines between steps */}
              {step.id < 4 && (
                <div className="hidden lg:block absolute top-14 left-[70%] w-[80%] h-0.5 bg-gradient-to-r from-purple-500 to-transparent z-0"></div>
              )}

              <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-lg relative z-10 h-full flex flex-col">
                <div className="text-5xl font-bold text-purple-600 mb-4 font-['Climate_Crisis']">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1a1a3a]">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
