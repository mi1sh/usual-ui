import {render} from '@testing-library/react';
import {Text} from './Text.tsx';

describe(`Component: ${Text.name}`, () => {
	it('should render', () => {
		const { container} = render(<Text>My text</Text>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <span
			    class="w-full px-4 py-2 text-base font-semibold text-left"
			  >
			    My text
			  </span>
			</div>
		`);
	})
})