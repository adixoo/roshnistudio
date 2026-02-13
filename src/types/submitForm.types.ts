import z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  location: z.string().min(1, "Project location is required."),
  projectType: z.string().min(1, "Please select a project type."),
  budget: z.string().min(1, "Please select a budget range."),
  message: z.string().min(10, "Please provide a bit more detail.")
});

export type FormValues = z.infer<typeof formSchema>;
