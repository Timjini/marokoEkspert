'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  FaFilter, 
  FaMapMarkerAlt, 
  FaClock, 
  FaMoneyBillWave,
  FaStar,
  FaLanguage,
  FaUsers,
  FaChevronRight,
  FaTimes
} from 'react-icons/fa';
import { allTours } from '../utils/data';

const Tours: React.FC = () => {
  // State for filters
  const [filters, setFilters] = useState({
    locations: [] as string[],
    categories: [] as string[],
    durations: [] as string[],
    languages: [] as string[],
    types: [] as string[],
    priceRange: [0, 300] as [number, number]
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  // Filter logic
  const filteredTours = allTours.filter(tour => {
    // Location filter
    if (filters.locations.length > 0 && !filters.locations.includes(tour.location)) {
      return false;
    }
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(tour.category)) {
      return false;
    }
    // Duration filter
    if (filters.durations.length > 0) {
      const durationMatch = filters.durations.some(filterDuration => {
        if (filterDuration === "Half-day") return tour.duration.includes("hours") || tour.duration.includes("Half-day");
        if (filterDuration === "Full day") return tour.duration.includes("Full day");
        if (filterDuration === "Multi-day") return tour.duration.includes("days");
        return tour.duration.includes(filterDuration);
      });
      if (!durationMatch) return false;
    }
    // Language filter
    if (filters.languages.length > 0 && !filters.languages.some(lang => tour.language.includes(lang))) {
      return false;
    }
    // Type filter
    if (filters.types.length > 0 && !filters.types.includes(tour.type)) {
      return false;
    }
    // Price filter
    if (tour.price < filters.priceRange[0] || tour.price > filters.priceRange[1]) {
      return false;
    }
    return true;
  });

  // Handle filter changes
  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => {
      const currentFilters = [...prev[filterType]] as string[];
      const index = currentFilters.indexOf(value);
      
      if (index === -1) {
        currentFilters.push(value);
      } else {
        currentFilters.splice(index, 1);
      }

      return {
        ...prev,
        [filterType]: currentFilters
      };
    });
    setCurrentPage(1);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      locations: [],
      categories: [],
      durations: [],
      languages: [],
      types: [],
      priceRange: [0, 300]
    });
  };

  // Pagination logic
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);
  const totalPages = Math.ceil(filteredTours.length / toursPerPage);

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-[url(https://images.unsplash.com/photo-1559586616-361e18714958?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Explore Morocco: Tours, Activities, and Events</h1>
          <p className="text-xl text-amber-200 max-w-2xl">
            Find unforgettable experiences in Marrakech, Essaouira, and Agadir
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Mobile Filter Button */}
        <button 
          onClick={() => setMobileFiltersOpen(true)}
          className="md:hidden flex items-center bg-amber-600 text-white px-4 py-2 rounded-lg mb-4"
        >
          <FaFilter className="mr-2" />
          Filters
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white p-4 rounded-lg shadow-md h-fit sticky top-4`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-amber-600 hover:underline"
              >
                Clear all
              </button>
              <button 
                onClick={() => setMobileFiltersOpen(false)}
                className="md:hidden text-gray-500"
              >
                <FaTimes />
              </button>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-amber-600" />
                Location
              </h3>
              {["Marrakech", "Essaouira", "Agadir"].map(location => (
                <div key={location} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={`location-${location}`}
                    checked={filters.locations.includes(location)}
                    onChange={() => handleFilterChange("locations", location)}
                    className="mr-2 rounded text-amber-600"
                  />
                  <label htmlFor={`location-${location}`}>{location}</label>
                </div>
              ))}
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              {["Tour", "Activity", "Event"].map(category => (
                <div key={category} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onChange={() => handleFilterChange("categories", category)}
                    className="mr-2 rounded text-amber-600"
                  />
                  <label htmlFor={`category-${category}`}>{category}</label>
                </div>
              ))}
            </div>

            {/* Duration Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaClock className="mr-2 text-amber-600" />
                Duration
              </h3>
              {["1 hour", "Half-day", "Full day", "Multi-day"].map(duration => (
                <div key={duration} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={`duration-${duration}`}
                    checked={filters.durations.includes(duration)}
                    onChange={() => handleFilterChange("durations", duration)}
                    className="mr-2 rounded text-amber-600"
                  />
                  <label htmlFor={`duration-${duration}`}>{duration}</label>
                </div>
              ))}
            </div>

            {/* Language Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaLanguage className="mr-2 text-amber-600" />
                Language
              </h3>
              {["Polish", "English", "French"].map(language => (
                <div key={language} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={`language-${language}`}
                    checked={filters.languages.includes(language)}
                    onChange={() => handleFilterChange("languages", language)}
                    className="mr-2 rounded text-amber-600"
                  />
                  <label htmlFor={`language-${language}`}>{language}</label>
                </div>
              ))}
            </div>

            {/* Type Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaUsers className="mr-2 text-amber-600" />
                Type
              </h3>
              {["Private", "Group"].map(type => (
                <div key={type} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    id={`type-${type}`}
                    checked={filters.types.includes(type)}
                    onChange={() => handleFilterChange("types", type)}
                    className="mr-2 rounded text-amber-600"
                  />
                  <label htmlFor={`type-${type}`}>{type}</label>
                </div>
              ))}
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaMoneyBillWave className="mr-2 text-amber-600" />
                Price Range
              </h3>
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="300"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], parseInt(e.target.value)]})}
                  className="w-full mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>€{filters.priceRange[0]}</span>
                  <span>€{filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing <span className="font-bold">{filteredTours.length}</span> {filteredTours.length === 1 ? "result" : "results"}
              </p>
            </div>

            {currentTours.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentTours.map(tour => (
                  <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-amber-100">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={tour.thumbnail} 
                        alt={tour.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        width={3870}
                        height={2500}
                      />
                      {tour.tags && (
                        <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                          <FaStar className="inline mr-1" />
                         <span className='capitalize'>{tour.tags[0]}</span> 
                        </div>
                      )}
                    </div>
                    
                    {/* Tour Info */}
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-amber-900 mb-2">{tour.title}</h3>
                      
                      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-3">
                        <span className="flex items-center mr-3 mb-1">
                          <FaMapMarkerAlt className="mr-1 text-amber-600" />
                          {tour.location}
                        </span>
                        <span className="flex items-center mr-3 mb-1">
                          <FaClock className="mr-1 text-amber-600" />
                          {tour.duration}
                        </span>
                        <span className="flex items-center mb-1">
                          <FaMoneyBillWave className="mr-1 text-amber-600" />
                          From €{tour.price}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{tour.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-1">
                          {tour.language.map(lang => (
                            <span key={lang} className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
                              {lang}
                            </span>
                          ))}
                        </div>
                        <Link href={`/tours/${tour.id}`} className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors cursor-pointer">
                          View Details <FaChevronRight className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-8 text-center">
                <h3 className="text-xl font-bold text-amber-900 mb-2">No tours match your filters</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <button 
                  onClick={clearFilters}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredTours.length > toursPerPage && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded border border-amber-300 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-full ${currentPage === page ? 'bg-amber-600 text-white' : 'border border-amber-300'}`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 rounded border border-amber-300 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;