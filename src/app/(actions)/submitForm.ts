"use server";

import {
  BUDGET_MAP,
  formSchema,
  FormValues,
  PROJECT_TYPE_MAP
} from "@/types/submitForm.types";

export async function submitForm(data: FormValues) {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors
    };
  }

  // Here you would typically send an email or save to a database
  const formattedData = {
    ...result.data,
    projectType:
      PROJECT_TYPE_MAP[
        result.data.projectType as keyof typeof PROJECT_TYPE_MAP
      ],
    budget: BUDGET_MAP[result.data.budget as keyof typeof BUDGET_MAP]
  };

  console.log("Form Submitted Successfully:", formattedData);

  return {
    success: true,
    message: "Thank you! Your enquiry has been sent."
  };
}
