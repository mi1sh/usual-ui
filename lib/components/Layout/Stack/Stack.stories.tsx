import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";
import { Box } from "../Box/Box";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Column: Story = {
    args: {
        direction: 'column',
        gap: "md"
    },
  render: (args) => (
    <Stack className="bg-gray-400" {...args}>
      <Box className="w-[100px] h-[100px] bg-blue-500" />
      <Box className="w-[100px] h-[100px] bg-red-500" />
      <Box className="w-[100px] h-[100px] bg-green-500" />
    </Stack>
  ),
};

export const Row: Story = {
    args: {
        direction: 'row',
        gap: "md"
    },
    render: (args) => (
        <Stack className="bg-gray-400" {...args}>
            <Box variant="outline">First</Box>
            <Box variant="outline">Second</Box>
            <Box variant="outline">Third</Box>
        </Stack>
    ),
};
