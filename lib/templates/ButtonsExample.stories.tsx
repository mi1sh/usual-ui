import type {Meta, StoryObj} from '@storybook/react';
import {ButtonsExample} from './ButtonsExample.tsx';

const meta: Meta<typeof ButtonsExample> = {
	title: 'Templates/ButtonsExample',
	component: ButtonsExample,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {};