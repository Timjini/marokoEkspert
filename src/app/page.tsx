"use client";

import Loader from "./components/common/Loader";
import AboutSection from "./components/home/AboutSection";
import CTASection from "./components/home/CTASection";
import FeaturedTours from "./components/home/FeaturedTours";
import { Gallery } from "./components/home/Gallery";
import HeroSection from "./components/home/HeroSection";
import { MeetOurGuides } from "./components/home/MeetOurGuides";
import ServicesSection from "./components/home/ServicesSection";
import WhyChooseUs from "./components/home/WhyChooseUs";
import useFetchPageContent from "./hooks/useFetchPageContent";

export default function Home() {
  const { loading, error, pageContent } = useFetchPageContent("home");
  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
  if (!pageContent) return <div>Page not found</div>;
  console.log(pageContent.pageElements);
  const plContent = {
    title: pageContent.pageElements[0].title_pl,
  };

  console.log(plContent)
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
