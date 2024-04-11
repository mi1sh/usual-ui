import {render} from '@testing-library/react';
import {Stack} from './Stack.tsx';

describe(`Component: ${Stack.name}`, () => {
	it('should render', () => {
		const { container} = render(<Stack>My stack</Stack>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="text-center w-full flex flex-col items-start p-4"
			  >
			    My stack
			  </div>
			</div>
		`);
	});
});