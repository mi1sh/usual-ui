import type {ComponentProps, ReactNode} from 'react';
import {cva, VariantProps} from 'class-variance-authority';
import {cn} from '../utils/utils.tsx';

const buttonStyles = cva([
		'w-full', 'rounded-md', 'active:bg-primary-700', 'font-semibold', 'disabled:cursor-not-allowed', 'focus:outline-none', 'transition-colors', 'duration-200'
	],
	{
		variants: {
			variant: {
				solid: '',
				outline: 'border-2 active:bg-primary-200',
				ghost: 'active:bg-primary-200'
			},
			size: {
				sm: 'px-4 py-2 text-sm',
				md: 'px-4 py-2 text-base',
				lg: 'px-6 py-3 text-lg'
			},
			colorscheme: {
				primary: 'text-white'
			},
		},
		compoundVariants: [
			{
				variant: 'solid',
				colorscheme: 'primary',
				className: 'bg-primary-500 hover:bg-primary-600'
			},
			{
				variant: 'outline',
				colorscheme: 'primary',
				className: 'text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100'
			},
			{
				variant: 'ghost',
				colorscheme: 'primary',
				className: 'text-primary-600 bg-transparent hover:bg-primary-100'
			}
		],
		defaultVariants: {
			variant: 'solid',
			size: 'md',
			colorscheme: 'primary'
		}
	}
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

export const Button = ({variant, size, colorscheme, className, ...props}: ButtonProps): ReactNode => {
	return <button className={cn(buttonStyles({variant, size, colorscheme, className}))} {...props}/>;
};
