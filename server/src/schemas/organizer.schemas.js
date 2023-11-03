import z from "zod";
export const organizerSchema = z.object({
  id: z.number({ required_error: "Id is required" }).nonnegative(),
  eventPlannerBio: z.string({ required_error: "Biography is required" }),
  eventPlannerMainLink: z.string({ required_error: "Link is required" }),
  eventProfilePicture: z.string({ required_error: "Picture is required" }),
});
