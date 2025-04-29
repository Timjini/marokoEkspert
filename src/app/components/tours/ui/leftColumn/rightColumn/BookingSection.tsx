import { BookingForm } from "@/app/components/forms/TourBooking";
import { GenericModal } from "@/app/components/modals/generic-modal";
import { Tour } from "@/app/types/tour";
import { useState } from "react";
import { FaCheck, FaQuestionCircle, FaTimes } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

export const BookingSection = ({ tour }: { tour: Tour }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200 sticky top-4">
      <h2 className="text-2xl font-bold text-amber-900 mb-6">Tour Details</h2>

      <div className="space-y-4 mb-6">
        {tour.quickFacts.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.icon}
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-lg p-4 mb-6">
        <div className="text-center mb-2">
          <span className="text-gray-500">From</span>
          <p className="text-3xl font-bold text-amber-700">
            {tour.pricing.from}
          </p>
          <span className="text-gray-600 text-sm">{tour.pricing.note}</span>
        </div>
        <div className="text-center text-sm text-amber-700">
          {tour.pricing.additional.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-amber-900 mb-2">
          What&apos;s Included
        </h3>
        <ul className="space-y-2 text-sm mb-4">
          {tour.included.map((item, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold text-amber-900 mb-2">Not Included</h3>
        <ul className="space-y-2 text-sm">
          {tour.notIncluded.map((item, index) => (
            <li key={index} className="flex items-start">
              <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

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
          <BookingForm tourName={tour.details.title} />
        </GenericModal>
        <button className="w-full bg-white border-2 border-amber-600 text-amber-700 py-3 rounded-lg font-bold shadow-sm hover:bg-amber-50 transition-all flex items-center justify-center gap-2">
          <FaQuestionCircle />
          <span>Ask a Question</span>
        </button>
      </div>
    </div>
  );
};
