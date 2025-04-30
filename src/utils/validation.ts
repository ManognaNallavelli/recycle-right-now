
import { z } from 'zod';
import { addDays, isBefore } from "date-fns";

export const pickupFormSchema = z.object({
  address: z.string().min(5, { message: 'Address is required' }),
  city: z.string().min(2, { message: 'City is required' }).refine(val => val.toLowerCase() === 'hyderabad', {
    message: "We currently only service Hyderabad. Please contact support for other locations."
  }),
  state: z.string().min(2, { message: 'State is required' }),
  zip: z.string().min(5, { message: 'Valid ZIP code is required' }),
  date: z.date({ required_error: 'Please select a date' }).refine(date => {
    const minDate = addDays(new Date(new Date().setHours(0, 0, 0, 0)), 2);
    return !isBefore(date, minDate);
  }, {
    message: "Pickup date must be at least 2 days from today",
  }),
  timeSlot: z.string({ required_error: 'Please select a time slot' }),
  items: z.array(z.string()).refine((val) => val.length > 0, {
    message: "Select at least one item",
  }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' })
    .refine(val => /^\+91\s?\d{10}$/.test(val), {
      message: "Please enter a valid Indian phone number starting with +91 followed by 10 digits"
    }),
  notes: z.string().optional(),
});

export type PickupFormValues = z.infer<typeof pickupFormSchema>;

export const timeSlots = [
  "9:00 AM - 12:00 PM",
  "12:00 PM - 3:00 PM",
  "3:00 PM - 6:00 PM",
];

export const electronicItems = [
  { id: "computers", label: "Computers & Laptops" },
  { id: "phones", label: "Mobile Phones & Tablets" },
  { id: "tvs", label: "TVs & Monitors" },
  { id: "printers", label: "Printers & Scanners" },
  { id: "audio", label: "Audio Equipment" },
  { id: "batteries", label: "Batteries" },
  { id: "cables", label: "Cables & Chargers" },
  { id: "other", label: "Other Electronics" },
];
