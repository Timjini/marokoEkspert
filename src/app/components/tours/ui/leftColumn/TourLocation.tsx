import { Tour } from "@/app/types/tour";

export const TourLocation = ({ tour }: { tour: Tour }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-amber-100 mb-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">Tour Location</h2>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
        <iframe
          src={tour.mapEmbedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};
