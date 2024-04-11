import type { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils.tsx";
import { forwardRef } from "react";

const buttonStyles = cva(
  [
    "w-auto",
    "rounded-md",
    "active:bg-primary-700",
    "disabled:cursor-not-allowed",
    "focus:outline-none",
    "transition-colors",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2 active:bg-primary-200",
        ghost: "active:bg-primary-200",
        underline: "underline-offset-2 active:bg-transparent active:text-primary-600 hover:underline hover:text-primary-400",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
      },
      weight: {
        thin: "font-thin",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        black: "font-black",
      },
      underline: {
        true: "underline underline-offset-2",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorscheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        colorscheme: "primary",
        className:
          "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorscheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "underline",
        colorscheme: "primary",
        className: "hover:bg-transparent text-primary-500 bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "solid",
      weight: "semibold",
      size: "md",
      colorscheme: "primary",
    },
  },
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorscheme, className, ...props }, ref) => {
    return <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme, className }))}
        {...props}
      />
  },
);
