import type {Meta, StoryObj} from '@storybook/react';
import {Box} from './Box.tsx';

const meta: Meta<typeof Box> = {
	title: 'Layout/Box',
	component: Box,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "default",
	},
	render: (args) => (
		<Box {...args}>
			<h1>Text here</h1>
		</Box>
	),
}

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "lg",
		align: "center",
	},
	render: (args) => (
		<Box {...args}>
			<h1>The individual has sorrow, but not everyone witness it.</h1>
			<h2>Klingons are the space suits of the distant energy.</h2>
		</Box>
	),
}