import {render} from '@testing-library/react';
import {Stack} from './Stack.tsx';

describe(`Component: ${Stack.name}`, () => {
	it('should render', () => {
		const { container} = render(<Stack>My stack</Stack>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="flex flex-col items-start"
			  >
			    My stack
			  </div>
			</div>
		`);
	});
});