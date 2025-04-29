import { Tour } from "@/app/types/tour";

export const ItineraryDetails = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        Detailed Itinerary
      </h2>

      <div className="space-y-6">
        {tour.itinerary.map((item, index) => (
          <div key={index} className="flex">
            <div className="flex flex-col items-center mr-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              {index !== tour.itinerary.length - 1 && (
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
  );
};
