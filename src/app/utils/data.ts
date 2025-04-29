import React from "react";
import { FaCalendarAlt, FaLandmark, FaMapMarkerAlt, FaMosque } from "react-icons/fa";
import { GiShoppingBag, GiTempleGate } from "react-icons/gi";


export const allTours = [
    {
      id: 1,
      title: "Sunset Camel Ride in Marrakech",
      category: "Activity",
      location: "Marrakech",
      duration: "2 hours",
      price: 75,
      description: "Experience a magical sunset over the palm groves with traditional Berber tea.",
      language: ["Polish", "English"],
      type: "Group",
      thumbnail: "https://plus.unsplash.com/premium_photo-1661936495413-875706d59696?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bestseller: true,
      tags:['bestseller']
    },
    {
      id: 2,
      title: "Discover Marrakech: Full-Day Guided City Tour",
      category: "Tour",
      location: "Marrakech",
      duration: "Full day",
      price: 80,
      description: "Explore Marrakech's vibrant souks, palaces, gardens, and historic medina in one day!",
      language: ["Polish", "English", "French"],
      type: "Private",
      thumbnail: "https://images.unsplash.com/photo-1618423205267-e95744f57edf?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Flavors of Marrakech: A Guided Culinary Journey",
      category: "Activity",
      location: "Marrakech",
      duration: "2 hours",
      price: 75,
      description: "Taste Marrakech’s authentic flavors on a guided tour through markets and kitchens!",
      language: ["Polish", "French"],
      type: "Group",
      thumbnail: "https://images.unsplash.com/photo-1643019237176-8ae0859f1123?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bestseller: true
    },
    {
      id: 4,
      title: "4x4 Off-Road through the High Atlas",
      category: "Tour",
      location: "Marrakech",
      duration: "3 hours",
      price: 75,
      description: "Experience rugged trails and breathtaking High Atlas views on a thrilling 4x4 ride!",
      language: ["Polish", "English"],
      type: "Group",
      thumbnail: "https://images.unsplash.com/photo-1617374128851-c84e37dc9f37?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Ait Ben Haddou & Ouarzazate: Full-Day Desert Adventure",
      category: "Activity",
      location: "Marrakech",
      duration: "Full day",
      price: 55,
      description: "Journey through ancient kasbahs and desert landscapes on a full-day guided trip!",
      language: ["English", "Polish"],
      type: "Group",
      thumbnail: "https://images.unsplash.com/photo-1548105155-b8c1b5142252?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Paradise Valley & Immouzzer: Nature Escape Day Trip",
      category: "Activity",
      location: "Agadir",
      duration: "Full day",
      price: 45,
      description: "Swim in natural pools and hike through lush valleys on this refreshing day tour!",
      language: ["Polish", "English"],
      type: "Private",
      thumbnail: "https://images.unsplash.com/photo-1577968680674-d967769be12c?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bestseller: true
    }
  ];
  
///////////////////////////////////////////////////
// SHOW TOUR DATA
//////////////////////////////////////////////////

// one tour sample
export const tourDetails = {
    keys:{
        details: 'string',
        highlights: 'highlights',
    },
    details: {
      title: "Sunset Camel Ride in Marrakech",
      category: "Activity",
      location: "Marrakech",
      duration: "2 hours",
      price: 75,
      description: "Uncover the magic of Marrakech with a full-day guided tour through historic monuments, lush gardens, bustling souks, and cultural museums.",
      language: ["Polish", "English"],
      type: "Group",
      coverImg: "https://images.unsplash.com/photo-1618423205267-e95744f57edf?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gallery: ["image1.png", "image2.png", "image3.png"],
      bestseller: true,
      languages: ["Polish", "English"],
      tags:['bestseller']
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
          React.createElement(FaMosque, { className:"text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0"})
        ),
        title: "Historic Sites",
        description: "Koutoubia, Bahia Palace, and Secret Garden.",
      },
      {
        icon: (
            React.createElement(GiShoppingBag, { className:"text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0"})
        ),
        title: "Souks & Medinas",
        description:
          "Traditional markets with spices, crafts, and local goods.",
      },
      {
        icon: (
            React.createElement(GiTempleGate, { className:"text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0"})
        ),
        title: "Majorelle & Menara Gardens",
        description: "Lush landscapes, orchards, and serene spaces.",
      },
      {
        icon: (
            React.createElement(FaLandmark, { className:"text-amber-600 text-2xl mt-1 mr-3 flex-shrink-0"})
        ),
        title: "Water Civilization Museum",
        description:
          "A unique museum experience dedicated to Moroccan hydraulic history.",
      },
    ],
    quickFacts: [
      {
        icon: React.createElement(FaCalendarAlt, { className:"text-amber-600 mr-3"}),
        label: "Duration",
        value: "6 to 8 hours",
      },
      {
        icon: React.createElement(FaMapMarkerAlt, { className:"text-amber-600 mr-3"}),
        label: "Departure Time",
        value: "9:00 am",
      },
      {
        icon: React.createElement(FaCalendarAlt, { className:"text-amber-600 mr-3"}),
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
      whyChooseTour:[
        "Authentic Sahara experience with luxury camping",
        "Small groups only (max 12 people)",
        "Polish-speaking guides available",
        "Responsible tourism - supports local Berber communities",
      ],
      faqs:[
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
      ]
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108366.6744739468!2d-8.0868817!3d31.6349323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus",
  };
