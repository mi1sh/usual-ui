import {render} from '@testing-library/react';
import {Box} from './Box.tsx';

describe(`Component: ${Box.name}`, () => {
	it('should render', () => {
		const { container} = render(<Box>My box</Box>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div
			    class="p-1 px-1.5 text-center w-full"
			  >
			    My box
			  </div>
			</div>
		`);
	});
});