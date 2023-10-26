import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string({ required_error: "First Name is required" }).max(50, {
    required_error: "Full Name must be a maximum of 50 characters.",
  }),
  lastName: z.string({ required_error: "First Name is required" }).max(50, {
    required_error: "Full Name must be a maximum of 50 characters.",
  }),
  username: z.string({ required_error: "User Name is required" }).max(8, {
    required_error: "User Name must be a maximum of 13 characters.",
  }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Incorrect Email format" })
    .max(120, {
      required_error: "Email must be a maximum of 8 characters.",
    }),
  password: z.string({ required_error: "Password is required" }).min(6, {
    message: "Password must be at leaste 6 characters",
  }),
  dateOfBirth: z.string({ required_error: "Date of Birth is required" }),
});
