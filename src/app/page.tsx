import AboutSection from "./components/home/AboutSection";
import CTASection from "./components/home/CTASection";
import FeaturedTours from "./components/home/FeaturedTours";
import { Gallery } from "./components/home/Gallery";
import HeroSection from "./components/home/HeroSection";
import { MeetOurGuides } from "./components/home/MeetOurGuides";
import ServicesSection from "./components/home/ServicesSection";
import WhyChooseUs from "./components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <FeaturedTours />
      <CTASection />
      <MeetOurGuides />
      <Gallery />
    </>
  );
}
