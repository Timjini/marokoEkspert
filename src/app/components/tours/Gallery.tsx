import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const TourGallery = () => {
  const galleryImages = [
    {
      src: "/desert-camp.jpg",
      alt: "Luxury desert camp",
    },
    {
      src: "/camel-trek.jpg",
      alt: "Camel trek at sunset",
    },
    {
      src: "/berber-village.jpg",
      alt: "Berber village visit",
    },
    {
      src: "/atlas-mountains.jpg",
      alt: "Atlas Mountains landscape",
    },
    {
      src: "/moroccan-food.jpg",
      alt: "Traditional Moroccan cuisine",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [galleryImages.length, isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-96 w-full">
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
