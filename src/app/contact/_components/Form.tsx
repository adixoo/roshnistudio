"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { cn } from "@/lib/utils";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputGroup } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { formSchema, FormValues } from "@/types/submitForm.types";
// Schema

export default function EnquiryForm() {
  const form = useForm<FormValues>({
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

  function onSubmit(data: FormValues) {
    console.log("Form Submitted:", data);
  }

  const baseInputStyles =
    "border-none bg-charcoal/10 px-4 py-6 transition-all hover:bg-charcoal/15 focus:bg-white focus-visible:ring-1 focus-visible:ring-primary";

  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-8 shadow">
        <h3 className="border-charcoal/20 mb-6 border-b pb-4 font-serif text-2xl text-slate-900">
          Project Enquiry
        </h3>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FieldGroup>
            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      className={cn(
                        baseInputStyles,
                        fieldState.invalid && "ring-1 ring-red-500"
                      )}
                      aria-invalid={fieldState.invalid}
                      required
                    />
                    <FieldDescription>
                      Your full name as you’d like us to address you.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Email Address</FieldLabel>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                      className={cn(
                        baseInputStyles,
                        fieldState.invalid && "ring-1 ring-red-500"
                      )}
                      aria-invalid={fieldState.invalid}
                      required
                    />
                    <FieldDescription>
                      We&apos;ll only use this to respond to your enquiry.
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Location + Project Type */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Controller
                name="location"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Project Location</FieldLabel>
                    <Input
                      {...field}
                      placeholder="City, Country"
                      className={cn(
                        baseInputStyles,
                        fieldState.invalid && "ring-1 ring-red-500"
                      )}
                      aria-invalid={fieldState.invalid}
                      required
                    />
                    <FieldDescription>
                      Where is the project located?
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="projectType"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Project Type</FieldLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={cn(
                          baseInputStyles,
                          "w-full",
                          fieldState.invalid && "ring-1 ring-red-500"
                        )}
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
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Budget */}
            <Controller
              name="budget"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Estimated Budget</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      className={cn(
                        baseInputStyles,
                        "w-full",
                        fieldState.invalid && "ring-1 ring-red-500"
                      )}
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
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Message */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Message / Vision</FieldLabel>

                  <InputGroup>
                    <Textarea
                      {...field}
                      placeholder="Tell us about your space..."
                      className={cn(
                        baseInputStyles,
                        "min-h-32 resize-none",
                        fieldState.invalid && "ring-1 ring-red-500"
                      )}
                      aria-invalid={fieldState.invalid}
                      required
                    />

                    {/* <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length} characters
                      </InputGroupText>
                    </InputGroupAddon> */}
                  </InputGroup>

                  <FieldDescription>
                    Include goals, timeline, inspiration, and any constraints.
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Button
            type="submit"
            className="hover:bg-charcoal/80 w-full text-white"
            disabled={form.formState.isSubmitting}
            variant={"outline"}
          >
            {form.formState.isSubmitting
              ? "Sending..."
              : "Send Project Inquiry"}
          </Button>
        </form>
      </div>
    </div>
  );
}
