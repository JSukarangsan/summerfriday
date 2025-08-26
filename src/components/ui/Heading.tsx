import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(
  "font-bold tracking-tight text-balance",
  {
    variants: {
      level: {
        h1: "font-sombra text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9]",
        h2: "font-sombra text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[0.95]",
        h3: "font-sombra text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight",
        h4: "font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight",
        h5: "font-inter text-base sm:text-lg md:text-xl lg:text-2xl leading-tight",
        h6: "font-inter text-sm sm:text-base md:text-lg lg:text-xl leading-tight"
      },
      color: {
        primary: "text-neutral-900",
        secondary: "text-neutral-700",
        accent: "text-blue-500",
        white: "text-white"
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      }
    },
    defaultVariants: {
      level: "h1",
      color: "primary",
      align: "left"
    }
  }
);

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", color, align, ...props }, ref) => {
    const Tag = level || "h1";
    
    return React.createElement(
      Tag,
      {
        className: cn(headingVariants({ level, color, align, className })),
        ref,
        ...props
      }
    );
  }
);

Heading.displayName = "Heading";

export default Heading;