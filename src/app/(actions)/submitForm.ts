"use server";

import { formSchema, FormValues } from "@/types/submitForm.types";

export async function submitForm(data: FormValues) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors
    };
  }

  // Here you would typically send an email or save to a database
  console.log("Form Submitted Successfully:", result.data);

  return {
    success: true,
    message: "Thank you! Your enquiry has been sent."
  };
}
