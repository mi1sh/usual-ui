import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "../../utils/utils.tsx";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../../utils/types/types.ts";

const textStyles = cva("w-full", {
  variants: {
    variant: {
      default: "",
      outline: "border-2 rounded-xl",
    },
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "px-4 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-6 py-3 text-xl",
      "2xl": "px-8 py-4 text-2xl",
      "3xl": "px-8 py-4 text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
    colorscheme: {
      primary: "text-white",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
    },
  ],
  defaultVariants: {
    variant: "default",
    weight: "semibold",
    size: "md",
    align: "left",
  },
});

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  VariantProps<typeof textStyles>
>;
type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>,
) => React.ReactElement | null;

// @ts-expect-error - unexpected typing errors
export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      emphasis,
      size,
      weight,
      align,
      italic,
      underline,
      colorscheme,
      className,
      variant,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "span";

    return <Component
        ref={ref}
        className={cn(
          textStyles({
            emphasis,
            size,
            weight,
            align,
            italic,
            underline,
            colorscheme,
            className,
            variant,
          }),
        )}
        {...props}
      />
  },
);
