import {Box, BoxProps} from '../Box/Box.tsx';
import {cn} from '../../../utils/utils.tsx';

type StackProps = BoxProps

export const Stack = ({className, ...props}: StackProps) => {
	return (
		<Box className={cn("flex flex-col items-start", className)} {...props}/>
	);
};
