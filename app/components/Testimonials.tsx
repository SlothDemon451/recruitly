import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "Recruitly has transformed our hiring process. The AI-powered matching system saved us countless hours and helped us find talent we wouldn't have discovered otherwise.",
      name: "Sarah Johnson",
      title: "HR Director, TechVision UK",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      id: 2,
      content:
        "The quality of candidates we've hired through Recruitly has been exceptional. Their platform makes connecting with Pakistani tech talent seamless and efficient.",
      name: "Mark Williams",
      title: "CTO, Innovate Solutions",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 3,
      content:
        "As a growing startup, we needed to scale our team quickly without compromising on quality. Recruitly delivered outstanding results within our tight timeline.",
      name: "Jessica Chen",
      title: "Founder, DataSphere",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#1E2A4A] to-[#6046ca] px-4 md:px-8 lg:px-16 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-['Climate_Crisis']">
            What Our Clients Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from companies that have successfully built their teams using
            Recruitly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/10"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="inline-block w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6 text-white/90">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
