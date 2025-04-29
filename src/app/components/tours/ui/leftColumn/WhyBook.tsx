import { Tour } from "@/app/types/tour";
import { FaCheck } from "react-icons/fa";

export const WhyBook = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        Why Choose This Tour?
      </h2>
      <ul className="space-y-3">
        {tour.bookingInfo.whyChooseTour.map((item, index) => (
          <li key={index} className="flex items-start">
            <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
