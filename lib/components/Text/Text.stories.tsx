import type {Meta, StoryObj} from '@storybook/react';
import {Text} from './Text.tsx';

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: "md",
		children: "Brodium, fraticinida, et omnia. Ubi est regius pulchritudine?",
		variant: "default"
	}
}

export const Outline: Story = {
	args: {
		size: "md",
		children: "Brodium, fraticinida, et omnia. Ubi est regius pulchritudine?",
		variant: "outline"
	}
}