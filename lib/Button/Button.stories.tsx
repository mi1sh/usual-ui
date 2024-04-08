import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './Button';

const meta: Meta<typeof Button> = {
	component: Button,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<typeof Button>

export const Solid: Story = {
	args: {
		children: "Button",
		variant: 'solid',
	}
}

export const Outline: Story = {
	args: {
		children: "Button",
		variant: 'outline',
	}
}

export const Ghost: Story = {
	args: {
		children: "Button",
		variant: 'ghost',
	}
}