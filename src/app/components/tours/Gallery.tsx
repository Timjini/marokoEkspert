/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const TourGallery = () => {
  // All gallery content organized here
  const galleryContent = {
    images: [
      {
        src: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Luxury desert camp",
        description: "Marvel at Marrakech’s iconic Koutoubia Mosque and gardens."
      },
      {
        src: "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?q=80&w=3869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Camel trek at sunset",
        description: "Step back in time exploring Marrakech’s timeless monuments."
      },
      {
        src: "https://images.unsplash.com/photo-1548018560-cd92fb00373f?q=80&w=3379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Berber village visit",
        description: "Experience the true heart of Marrakech’s rich traditions."
      },
      {
        src: "https://images.unsplash.com/photo-1605882090044-aa9cbe6df29e?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Atlas Mountains landscape",
        description: "Wander vibrant souks and find unique Moroccan treasures."
      },
      {
        src: "https://images.unsplash.com/photo-1579283135011-0974a412341a?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Traditional Moroccan cuisine",
        description: "Dive into the lively spirit of Jemaa el-Fnaa’s bustling square."
      }
    ],
    autoPlayInterval: 5000,
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
        <div className="absolute bottom-16 left-0 right-0 text-center text-white bg-yellow-600 bg-opacity-24 p-2">
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
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-yellow-500" : "bg-gray-300"}`}
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