import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { PiArrowRight } from "react-icons/pi";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center whitespace-nowrap text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring uppercase cursor-pointer overflow-hidden rounded-none h-14 min-w-52",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-14 px-8",
        sm: "h-10 px-6 text-xs",
        lg: "h-16 px-10 text-base",
        icon: "size-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withAnimation?: boolean;
  showArrow?: boolean; // New prop for toggling the arrow
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  withAnimation = true,
  showArrow = true, // Default to true
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {withAnimation && !asChild ? (
        <>
          {/* 1. Label Layer (Lower Z-Index) */}
          <span
            className={cn(
              "relative z-10 transition-all duration-500 group-hover:-translate-x-4",
              showArrow ? "pr-10" : "" // Only add padding if arrow exists
            )}
          >
            {children}
          </span>

          {/* 2. Arrow Slider Layer (Higher Z-Index: Right to Left) */}
          {showArrow && (
            <div
              className={cn(
                "absolute top-1 right-1 bottom-1 z-20 flex w-12 items-center justify-center transition-all duration-500 ease-in-out group-hover:w-[calc(100%-8px)]",
                "bg-white/30 group-hover:bg-white"
                // getArrowStyles()
              )}
            >
              <PiArrowRight className="size-6 transition-transform duration-500 group-hover:translate-x-[-4px] group-hover:-rotate-45" />
            </div>
          )}
        </>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
