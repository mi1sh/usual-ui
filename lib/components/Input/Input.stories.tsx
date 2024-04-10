import type {Meta, StoryObj} from '@storybook/react';
import {Input} from './Input.tsx';

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		type: "text",
		placeholder: "Some text here..."
	}
}

export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Password here..."
	}
}

export const Number: Story = {
	args: {
		type: "number",
		placeholder: "Number here..."
	}
}

export const Date: Story = {
	args: {
		type: "date",
		placeholder: "Date here..."
	}
}