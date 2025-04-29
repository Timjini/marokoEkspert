"use client";
import React from "react";
import { TourGallery } from "@/app/components/tours/ui/leftColumn/Gallery";
import { ItineraryDetails } from "@/app/components/tours/ui/leftColumn/ItineraryDetails";
import { TourBookingInfo } from "@/app/components/tours/ui/leftColumn/TourBookingInfo";
import { TourFaq } from "@/app/components/tours/ui/leftColumn/TourFaq";
import { TourHero } from "@/app/components/tours/TourHero";
import { TourIncludes } from "@/app/components/tours/ui/leftColumn/TourIncludes";
import { TourLocation } from "@/app/components/tours/ui/leftColumn/TourLocation";
import { TourSummary } from "@/app/components/tours/ui/leftColumn/TourSummary";
import { WhyBook } from "@/app/components/tours/ui/leftColumn/WhyBook";
import { tourDetails } from "@/app/utils/data";
import { BookingSection } from "@/app/components/tours/ui/leftColumn/rightColumn/BookingSection";

const TourPage: React.FC = () => {

  return (
    <div className="bg-amber-50">
      <TourHero tour={tourDetails} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left */}
          <div className="lg:col-span-2">
            <TourGallery />
            <TourSummary tour={tourDetails} />
            <ItineraryDetails tour={tourDetails} />
            <TourLocation tour={tourDetails} />
            <TourIncludes tour={tourDetails} />
            <TourBookingInfo tour={tourDetails} />
            <WhyBook tour={tourDetails} />
            <TourFaq tour={tourDetails} />
          </div>
          {/* right */}
          <BookingSection tour={tourDetails} />
        </div>
      </div>
    </div>
  );
};

export default TourPage;
