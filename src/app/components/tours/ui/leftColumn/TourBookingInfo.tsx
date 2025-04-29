import { Tour } from "@/app/types/tour";
import { FaCheck } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

export const TourBookingInfo = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        Booking Information
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-amber-900 mb-2">Meeting Place</h3>
          <p className="text-gray-700">
            {tour.bookingInfo.meetingPlace}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-amber-900 mb-2">Booking Notes</h3>
          <ul className="space-y-2">
            {tour.bookingInfo.notes.map((note, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-amber-900 mb-2">Payment Methods</h3>
          <ul className="space-y-2">
            {tour.bookingInfo.paymentMethods.map((method, index) => (
              <li key={index} className="flex items-start">
                <GiMoneyStack className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
