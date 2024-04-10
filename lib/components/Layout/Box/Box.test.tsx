import {render} from '@testing-library/react';
import {Box} from './Box.tsx';

describe(`Component: ${Box.name}`, () => {
	it('should render', () => {
		const { container} = render(<Box>My box</Box>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <div>
			    My box
			  </div>
			</div>
		`);
	});
});