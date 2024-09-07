import { z } from "zod";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

export const addBusSchema = z.object({
  busNumber: z
    .number()
    .nonnegative({ message: "Bus number must be non-negative." }),
  busRTOnumber: z.string().min(1, { message: "RTO number is required." }),
  conductorName: z.string().min(1, { message: "Conductor name is required." }),
  conductorPhoneNumber: z
    .string()
    .regex(/^\+91\d{10}$/, { message: "Invalid phone number format." }),
});
