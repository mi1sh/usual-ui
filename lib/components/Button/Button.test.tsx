import {render} from '@testing-library/react';
import {Button} from './Button.tsx';

describe(`Component: ${Button.name}`, () => {
	it('should render', () => {
		const { container} = render(<Button>My button</Button>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <button
			    class="w-auto rounded-md active:bg-primary-700 disabled:cursor-not-allowed focus:outline-none transition-colors duration-200 px-4 py-2 text-base text-white font-semibold bg-primary-500 hover:bg-primary-600"
			  >
			    My button
			  </button>
			</div>
		`);
	})
})