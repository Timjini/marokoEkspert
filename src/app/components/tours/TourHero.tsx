import { Tour } from "@/app/types/tour";

export const TourHero = ({ tour }: { tour: Tour }) => {
  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: `url(${tour.details.coverImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-end pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          {tour.details.title || "Tour"}
        </h1>
        <p className="text-xl text-amber-200 max-w-2xl">
          {tour.details.description || "Tour description"}
        </p>
      </div>
    </div>
  );
};
