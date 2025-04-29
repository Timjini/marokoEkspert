import { Tour } from "@/app/types/tour";
import { FaCheck, FaTimes } from "react-icons/fa";

export const TourIncludes = ({ tour }: { tour: Tour }) => {
  return (
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
            {tour.included.map((item, index) => (
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
            {tour.notIncluded.map((item, index) => (
              <li key={index} className="flex items-start">
                <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
