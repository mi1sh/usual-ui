import { Box, BoxProps } from "../Box/Box.tsx";
import { cn } from "../../../utils/utils.tsx";
import { cva, VariantProps } from "class-variance-authority";

const stackStyles = cva(["flex flex-col", "items-start", "p-4"], {
  variants: {
    direction: {
      column: "flex flex-col items-start",
      row: "flex flex-row items-start",
    },
    gap: {
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-10",
      "3xl": "gap-12"
    }
  },
});

type StackProps = BoxProps & VariantProps<typeof stackStyles>;

export const Stack = ({ className, gap, direction, ...props }: StackProps) => {
  return <Box className={cn(stackStyles({direction, gap, className}))} {...props} />;
};