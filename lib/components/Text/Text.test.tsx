import {render} from '@testing-library/react';
import {Text} from './Text.tsx';

describe(`Component: ${Text.name}`, () => {
	it('should render', () => {
		const { container} = render(<Text>My text</Text>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <span
			    class="w-full px-2 py-1 text-base font-medium text-left"
			  >
			    My text
			  </span>
			</div>
		`);
	})
})