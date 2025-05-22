import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import RevolutionizeSection from "./components/RevolutionizeSection";
import HowItWorks from "./components/HowItWorks";
import TrustedBy from "./components/TrustedBy";
import TrustedPartners from "./components/TrustedPartners";
import AboutRecruitly from "./components/AboutRecruitly";
import OurValuedPartners from "./components/OurValuedPartners";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <AboutRecruitly />
      <Features />
      <RevolutionizeSection />
      <HowItWorks />
      <TrustedBy />
      <OurValuedPartners />
      <TrustedPartners />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </div>
  );
}
