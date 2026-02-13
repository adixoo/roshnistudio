"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

// Individual Shadcn UI Components
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// 1. Define the Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  location: z.string().min(1, "Project location is required."),
  projectType: z.string().min(1, "Please select a project type."),
  budget: z.string().min(1, "Please select a budget range."),
  message: z.string().min(10, "Please provide a bit more detail.")
});

type FormValues = z.infer<typeof formSchema>;

export default function EnquiryForm() {
  // 2. Initialize the form
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      location: "",
      projectType: "",
      budget: "",
      message: ""
    }
  });

  // 3. Submit Handler
  function onSubmit(data: FormValues) {
    console.log("Form Submitted:", data);
  }

  // Common styles to maintain your specific design
  const labelStyles =
    "text-[10px] font-bold tracking-widest text-slate-400 uppercase";
  const inputStyles =
    "border-none bg-slate-50 px-4 py-6 focus-visible:ring-1 focus-visible:ring-primary transition-all dark:bg-slate-800";

  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-8 shadow">
        <h3 className="border-charcoal/20 mb-6 border-b pb-4 font-serif text-2xl text-slate-900">
          Project Enquiry
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Field */}
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <div className="space-y-1">
                  <label className={labelStyles}>Name</label>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    className={`${inputStyles} ${fieldState.invalid ? "ring-1 ring-red-500" : ""}`}
                  />
                  {fieldState.error && (
                    <p className="text-[10px] text-red-500">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />

            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <div className="space-y-1">
                  <label className={labelStyles}>Email Address</label>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@example.com"
                    className={`${inputStyles} ${fieldState.invalid ? "ring-1 ring-red-500" : ""}`}
                  />
                  {fieldState.error && (
                    <p className="text-[10px] text-red-500">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Location Field */}
            <Controller
              name="location"
              control={control}
              render={({ field, fieldState }) => (
                <div className="space-y-1">
                  <label className={labelStyles}>Project Location</label>
                  <Input
                    {...field}
                    placeholder="City, Country"
                    className={`${inputStyles} ${fieldState.invalid ? "ring-1 ring-red-500" : ""}`}
                  />
                  {fieldState.error && (
                    <p className="text-[10px] text-red-500">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />

            {/* Project Type Field */}
            <Controller
              name="projectType"
              control={control}
              render={({ field, fieldState }) => (
                <div className="space-y-1">
                  <label className={labelStyles}>Project Type</label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      className={`${inputStyles} w-full ${fieldState.invalid ? "ring-1 ring-red-500" : ""}`}
                    >
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential Design">
                        Residential Design
                      </SelectItem>
                      <SelectItem value="Wellness Studio">
                        Wellness Studio
                      </SelectItem>
                      <SelectItem value="Furniture Customization">
                        Furniture Customization
                      </SelectItem>
                      <SelectItem value="Commercial Office">
                        Commercial Office
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.error && (
                    <p className="text-[10px] text-red-500">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Budget Field */}
          <Controller
            name="budget"
            control={control}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <label className={labelStyles}>Estimated Budget</label>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    className={`${inputStyles} w-full ${fieldState.invalid ? "ring-1 ring-red-500" : ""}`}
                  >
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="$10k - $25k">$10k - $25k</SelectItem>
                    <SelectItem value="$25k - $50k">$25k - $50k</SelectItem>
                    <SelectItem value="$50k - $100k">$50k - $100k</SelectItem>
                    <SelectItem value="$100k+">$100k+</SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.error && (
                  <p className="text-[10px] text-red-500">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* Message Field */}
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <div className="space-y-1">
                <label className={labelStyles}>Message / Vision</label>
                <Textarea
                  {...field}
                  placeholder="Tell us about your space..."
                  className={`${inputStyles} min-h-30 ${fieldState.invalid ? "ring-1 ring-red-500" : ""}`}
                />
                {fieldState.error && (
                  <p className="text-[10px] text-red-500">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <button
            className="bg-primary hover:bg-opacity-90 shadow-primary/20 w-full py-4 text-xs font-bold tracking-widest text-white uppercase shadow-lg transition-all disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Project Inquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}
