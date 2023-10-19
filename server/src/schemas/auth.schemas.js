import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z
    .string({ required_error: "Full Name is required" }).max(50, {
    required_error: "Full Name must be a maximum of 50 characters.",
  }),
  userName: z
    .string({ required_error: "User Name is required" }).max(8, {
    required_error: "User Name must be a maximum of 8 characters.",
  }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Incorrect Email format" })
    .max(120, {
      required_error: "Email must be a maximum of 8 characters.",
    }),
  password: z
    .string({ required_error: "Password is required" }).min(6, {
    message: "Password must be at leaste 6 characters",
  }),
  dateOfBirth: z
    .string({ required_error: "Date of Birth is required" })
});
