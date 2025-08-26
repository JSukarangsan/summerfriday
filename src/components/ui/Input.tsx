import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const inputVariants = cva(
  "flex w-full transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-inter",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 bg-white hover:border-neutral-300 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20",
        filled: "border border-transparent bg-neutral-100 hover:bg-neutral-200 focus-visible:bg-white focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20",
        ghost: "border border-transparent bg-transparent hover:bg-neutral-50 focus-visible:bg-white focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/20"
      },
      size: {
        sm: "h-9 px-3 py-2 text-sm rounded-lg",
        md: "h-11 px-4 py-3 text-base rounded-xl", 
        lg: "h-12 px-5 py-4 text-lg rounded-xl"
      },
      state: {
        default: "",
        error: "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20",
        success: "border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/20"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      state: "default"
    }
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<VariantProps<typeof inputVariants>, 'size'> {
  inputSize?: VariantProps<typeof inputVariants>['size'];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, state, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size: inputSize, state, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;