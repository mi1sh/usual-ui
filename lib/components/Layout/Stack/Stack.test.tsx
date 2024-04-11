import {render} from '@testing-library/react';
import {Stack} from './Stack.tsx';

describe(`Component: ${Stack.name}`, () => {
	it('should render', () => {
		const { container} = render(<Stack>My stack</Stack>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="p-1 px-1.5 text-center w-auto flex flex-col items-start"
			  >
			    My stack
			  </div>
			</div>
		`);
	});
});