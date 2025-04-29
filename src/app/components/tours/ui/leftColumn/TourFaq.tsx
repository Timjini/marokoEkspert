import { Tour } from "@/app/types/tour";
import { FaCheck, FaQuestionCircle } from "react-icons/fa";

export const TourFaq = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {tour.bookingInfo.faqs.map((faq, index) => (
          <div key={index} className="border-b border-amber-100 pb-4">
            <h3 className="font-semibold text-amber-900 flex items-center">
              <FaQuestionCircle className="text-amber-600 mr-2" />
              {faq.question}
            </h3>
            <p className="text-gray-700 mt-2 pl-6">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
