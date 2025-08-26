import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const textVariants = cva(
  "font-inter",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl"
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold"
      },
      color: {
        primary: "text-neutral-900",
        secondary: "text-neutral-700", 
        muted: "text-neutral-500",
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
      size: "base",
      weight: "normal",
      color: "primary",
      align: "left"
    }
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, color, align, as = "p", ...props }, ref) => {
    const Component = as;
    
    return (
      <Component
        className={cn(textVariants({ size, weight, color, align, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";

export default Text;