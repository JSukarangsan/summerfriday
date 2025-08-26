import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-inter",
  {
    variants: {
      variant: {
        primary: "bg-neutral-900 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:scale-105 shadow-sm hover:shadow-md",
        secondary: "bg-white text-neutral-800 border-2 border-neutral-200 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-blue-500 hover:scale-105 shadow-sm hover:shadow-md",
        ghost: "text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900",
        outline: "border-2 border-blue-500 text-blue-500 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 hover:scale-105",
        link: "text-blue-500 underline-offset-4 hover:underline hover:text-blue-600"
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-3 text-base rounded-lg",
        lg: "px-8 py-4 text-lg rounded-xl",
        xl: "px-10 py-5 text-xl rounded-xl"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;