import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GiMoneyStack } from "react-icons/gi";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Phone is required"),
  participants: z.coerce.number().min(1, "At least 1 participant"),
  date: z.string().min(1, "Date is required"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function BookingForm({ tourName }: { tourName: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    // Simulate sending
    await new Promise((res) => setTimeout(res, 1000));
    toast.success(`Booking confirmed for ${data.name} on ${data.date}`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-lg font-semibold mb-2">Book: {tourName}</h2>
      <div>
        <Label htmlFor="name" className="mb-1">Name</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email" className="mb-1">Email</Label>
        <Input id="email" type="email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="phone" className="mb-1">Phone</Label>
        <Input id="phone" {...register("phone")} />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="participants" className="mb-1">Participants</Label>
        <Input id="participants" type="number" {...register("participants")} />
        {errors.participants && (
          <p className="text-red-500 text-sm">{errors.participants.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="date" className="mb-1">Desired Date</Label>
        <Input id="date" type="date" {...register("date")} />
        {errors.date && (
          <p className="text-red-500 text-sm">{errors.date.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
      >
        <GiMoneyStack className="text-xl" />
        <span>{isSubmitting ? "Booking..." : "Confirm Booking"}</span>
      </button>
    </form>
  );
}
