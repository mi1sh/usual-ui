import {type ComponentProps, forwardRef} from 'react';
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/utils.tsx";

const boxStyles = cva(
  ["w-auto", "text-center", "p-1 px-1.5"],
  {
    variants: {
      variant: {
        default: "",
        outline: "border-2 rounded-xl",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      size: {
        full: "w-full",
        auto: "w-auto",
        sm: "w-[15em]",
        md: "w-[30em]",
        lg: "w-[50em]",
        xl: "w-[70em]",
      }
    },
    compoundVariants: [
      {
        variant: "outline",
      },
    ],
    defaultVariants: {
      variant: "default",
      align: "center",
      size: "auto",
    },
  },

);

export type BoxProps = ComponentProps<"div"> & VariantProps<typeof boxStyles>;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
    ({ className, variant, align, size, ...props },
    ref) => {
    return <div ref={ref} className={cn(boxStyles({className, variant, align, size}))} {...props} />;
  },
);
