import { ReactElement, ReactNode } from "react";

export type Tour = {
    keys:{
      details: string,
      highlights: string,
    },
    details: {
      title: string;
      description: string;
      coverImg: string;
      gallery: string[];
      languages: string[];
      tags: string[];
    };
    itinerary: {
      step: number;
      title: string;
      description: string;
    }[];
    highlights: {
      icon: ReactNode;
      title: string;
      description: string;
    }[];
    quickFacts: {
      icon: ReactElement;
      label: string;
      value: string;
    }[];
    pricing: {
      from: string;
      note: string;
      additional: string[];
    };
    included: string[];
    notIncluded: string[];
    bookingInfo: {
      meetingPlace: string;
      notes: string[];
      paymentMethods: string[];
      whyChooseTour: string[];
      faqs: {
        question: string;
        answer: string;
      }[];
    };
    mapEmbedUrl: string;
  };