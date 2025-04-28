/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const TourGallery = () => {
  // All gallery content organized here
  const galleryContent = {
    images: [
      {
        src: "/desert-camp.jpg",
        alt: "Luxury desert camp",
        description: "Experience our premium desert camps under the stars"
      },
      {
        src: "/camel-trek.jpg",
        alt: "Camel trek at sunset",
        description: "Sunset camel treks through golden dunes"
      },
      {
        src: "/berber-village.jpg",
        alt: "Berber village visit",
        description: "Authentic cultural encounters with Berber communities"
      },
      {
        src: "/atlas-mountains.jpg",
        alt: "Atlas Mountains landscape",
        description: "Breathtaking views in the High Atlas Mountains"
      },
      {
        src: "/moroccan-food.jpg",
        alt: "Traditional Moroccan cuisine",
        description: "Savor authentic Moroccan flavors and cooking"
      }
    ],
    autoPlayInterval: 5000, // 5 seconds
    controls: {
      prev: "Previous image",
      next: "Next image",
      indicator: "Go to image"
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === galleryContent.images.length - 1 ? 0 : prevIndex + 1
        );
      }, galleryContent.autoPlayInterval);
    }

    return () => clearInterval(interval);
  }, [galleryContent.autoPlayInterval, galleryContent.images.length, isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryContent.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryContent.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative h-96 w-full">
      {/* Current image display */}
      <div className="h-full w-full">
        <img 
          src={galleryContent.images[currentIndex].src} 
          alt={galleryContent.images[currentIndex].alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-16 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2">
          {galleryContent.images[currentIndex].description}
        </div>
      </div>

      {/* Navigation indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {galleryContent.images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`${galleryContent.controls.indicator} ${index + 1}`}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        aria-label={galleryContent.controls.prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={goToNext}
        aria-label={galleryContent.controls.next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};