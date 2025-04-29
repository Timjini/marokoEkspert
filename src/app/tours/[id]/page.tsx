"use client";
import { BookingForm } from "@/app/components/forms/TourBooking";
import { GenericModal } from "@/app/components/modals/generic-modal";
import { TourGallery } from "@/app/components/tours/Gallery";
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLanguage,
  FaCheck,
  FaTimes,
  FaStar,
  FaQuestionCircle,
  FaMosque,
  FaMusic,
  FaLandmark,
} from "react-icons/fa";
import { GiMoneyStack, GiShoppingBag, GiTempleGate } from "react-icons/gi";

const TourPage: React.FC = () => {
  const [open, setOpen] = useState(false);

  const whyChooseTour = [
    "Authentic Sahara experience with luxury camping",
    "Small groups only (max 12 people)",
    "Polish-speaking guides available",
    "Responsible tourism - supports local Berber communities",
  ];

  const faqs = [
    {
      question: "What should I pack for the desert?",
      answer:
        "Comfortable clothing, warm layers for cool nights, sturdy shoes, sunglasses, sunscreen, a headscarf, and a camera. We provide detailed packing lists upon booking.",
    },
    {
      question: "Can I customize this tour?",
      answer:
        "Yes! We offer private departures that can be customized. Popular additions include extra nights in the desert, visits to Fes or Chefchaouen, or cooking classes.",
    },
    {
      question: "Is this tour suitable for children?",
      answer:
        "Absolutely! We've had many families enjoy this tour. Children under 5 ride for free in parents' 4x4, and we can adjust camel riding times for young children.",
    },
  ];

  const tourDetails = {
    main: {
      title: "Marrakech Full Day Guided Tour",
      description:
        "Uncover the magic of Marrakech with a full-day guided tour through historic monuments, lush gardens, bustling souks, and cultural museums.",
      coverImg:
        "https://images.unsplash.com/photo-1618423205267-e95744f57edf?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: ["image1.png", "image2.png", "image3.png"],
    },
    itinerary: [
      {
        step: 1,
        title: "Monuments and Palaces",
        description:
          "Visit the Koutoubia Tower (11th century), Bahia Palace (19th century), and the Secret Garden (16th century), showcasing centuries of Moroccan architecture.",
      },
      {
        step: 2,
        title: "Djemaa el Fna Square",
        description:
          "Experience the cultural heartbeat of Marrakech with performers, musicians, storytellers, and street life at this iconic square.",
      },
      {
        step: 3,
        title: "Souks and Medinas",
        description:
          "Explore the winding alleys of the souks, where vendors sell everything from spices and leather to handmade crafts and jewelry.",
      },
      {
        step: 4,
        title: "Historical Gardens",
        description:
          "Stroll through the famous Majorelle Gardens and the peaceful orchards and olive groves of Menara Garden.",
      },
      {
        step: 5,
        title: "Mohammed VI Museum for Water Civilization",
        description:
          "Visit the first Moroccan museum dedicated to hydraulic heritage, blending science, history, and culture.",
      },
    ],
    highlights: [
      {
        icon: (
          <FaMosque className="text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0" />
        ),
        title: "Historic Sites",
        description: "Koutoubia, Bahia Palace, and Secret Garden.",
      },
      {
        icon: (
          <GiShoppingBag className="text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0" />
        ),
        title: "Souks & Medinas",
        description:
          "Traditional markets with spices, crafts, and local goods.",
      },
      {
        icon: (
          <GiTempleGate className="text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0" />
        ),
        title: "Majorelle & Menara Gardens",
        description: "Lush landscapes, orchards, and serene spaces.",
      },
      {
        icon: (
          <FaLandmark className="text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0" />
        ),
        title: "Water Civilization Museum",
        description:
          "A unique museum experience dedicated to Moroccan hydraulic history.",
      },
    ],
    quickFacts: [
      {
        icon: <FaCalendarAlt className="text-amber-600 mr-3" />,
        label: "Duration",
        value: "6 to 8 hours",
      },
      {
        icon: <FaMapMarkerAlt className="text-amber-600 mr-3" />,
        label: "Departure Time",
        value: "9:00 am",
      },
      {
        icon: <FaCalendarAlt className="text-amber-600 mr-3" />,
        label: "Availability",
        value: "Every day",
      },
    ],
    pricing: {
      from: "€45.50",
      note: "per person (6 travelers)",
      additional: ["€47.50 pp (4 travelers)", "€85 pp (2 travelers)"],
    },
    included: [
      "Hotel pickup and drop-off",
      "Local guide",
      "Air-conditioned transport by minivan",
      "Transportation Insurance",
      "Liability insurance",
      "All taxes",
      "Quality service reliability",
    ],
    notIncluded: [
      "Lunch",
      "Entrance fees for Monuments and Majorelle Gardens",
      "Tips",
    ],
    bookingInfo: {
      meetingPlace:
        "Pickup from your hotel, riad, or any agreed location in Marrakech.",
      notes: [
        "Accepted until 6pm the day before (Marrakech time).",
        "Cancellation up to 24 hours in advance for full refund.",
      ],
      paymentMethods: [
        "Online payment via secure link (on request)",
        "In cash (Euros or MAD) upon arrival",
      ],
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108366.6744739468!2d-8.0868817!3d31.6349323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus",
  };

  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${tourDetails.main.coverImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {tourDetails.main.title || "Tour"}
          </h1>
          <p className="text-xl text-amber-200 max-w-2xl">
            {tourDetails.main.description || "Tour"}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Photo Gallery */}
            <TourGallery />

            {/* Quick Summary */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tourDetails.highlights.map((item, index) => (
                  <div key={index} className="flex items-start">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-amber-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Detailed Itinerary
              </h2>

              <div className="space-y-6">
                {tourDetails.itinerary.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      {index !== tourDetails.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-amber-300"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Tour Location
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src={tourDetails.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Included/Not Included Section */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                What&apos;s Included & Not Included
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Included */}
                <div>
                  <h3 className="font-semibold text-lg text-green-700 mb-3 flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Included in this tour
                  </h3>
                  <ul className="space-y-2">
                    {tourDetails.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                <div>
                  <h3 className="font-semibold text-lg text-red-700 mb-3 flex items-center">
                    <FaTimes className="text-red-500 mr-2" />
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {tourDetails.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking Information */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Booking Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">
                    Meeting Place
                  </h3>
                  <p className="text-gray-700">
                    {tourDetails.bookingInfo.meetingPlace}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">
                    Booking Notes
                  </h3>
                  <ul className="space-y-2">
                    {tourDetails.bookingInfo.notes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">
                    Payment Methods
                  </h3>
                  <ul className="space-y-2">
                    {tourDetails.bookingInfo.paymentMethods.map(
                      (method, index) => (
                        <li key={index} className="flex items-start">
                          <GiMoneyStack className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{method}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Book This Tour */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Why Choose This Tour?
              </h2>
              <ul className="space-y-3">
                {whyChooseTour.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-amber-100 pb-4">
                    <h3 className="font-semibold text-amber-900 flex items-center">
                      <FaQuestionCircle className="text-amber-600 mr-2" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 mt-2 pl-6">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 sticky top-4">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              Tour Details
            </h2>

            {/* Quick Facts */}
            <div className="space-y-4 mb-6">
              {tourDetails.quickFacts.map((item, index) => (
                <div key={index} className="flex items-center">
                  {item.icon}
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="bg-amber-50 rounded-lg p-4 mb-6">
              <div className="text-center mb-2">
                <span className="text-gray-500">From</span>
                <p className="text-3xl font-bold text-amber-700">
                  {tourDetails.pricing.from}
                </p>
                <span className="text-gray-600 text-sm">
                  {tourDetails.pricing.note}
                </span>
              </div>
              <div className="text-center text-sm text-amber-700">
                {tourDetails.pricing.additional.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>

            {/* Included */}
            <div className="mb-6">
              <h3 className="font-semibold text-amber-900 mb-2">
                What&apos;s Included
              </h3>
              <ul className="space-y-2 text-sm mb-4">
                {tourDetails.included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Not Included */}
              <h3 className="font-semibold text-amber-900 mb-2">
                Not Included
              </h3>
              <ul className="space-y-2 text-sm">
                {tourDetails.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setOpen(true)}
                className="cursor-pointer w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <GiMoneyStack className="text-xl" />
                <span>Book Now</span>
              </button>
              <GenericModal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Tour Booking"
              >
                <BookingForm tourName={tourDetails.main.title} />
              </GenericModal>
              <button className="w-full bg-white border-2 border-amber-600 text-amber-700 py-3 rounded-lg font-bold shadow-sm hover:bg-amber-50 transition-all flex items-center justify-center gap-2">
                <FaQuestionCircle />
                <span>Ask a Question</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPage;
