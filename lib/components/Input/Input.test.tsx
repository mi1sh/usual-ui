import {render} from '@testing-library/react';
import {Input} from './Input.tsx';

describe(`Component: ${Input.name}`, () => {
	it('should render', () => {
		const { container} = render(<Input>My input</Input>);

		expect(container).toMatchInlineSnapshot();
	});
});