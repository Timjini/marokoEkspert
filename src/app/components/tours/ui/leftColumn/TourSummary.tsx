import { Tour } from "@/app/types/tour";

export const TourSummary = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        Tour Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tour.highlights.map((item, index) => (
          <div key={index} className="flex items-start">
            {item.icon}
            <div>
              <h3 className="font-semibold text-amber-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
