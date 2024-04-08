import {render} from '@testing-library/react';
import {Button} from './Button';

describe(`Component: ${Button.name}`, () => {
	it('should render', () => {
		const { container} = render(<Button>My button</Button>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <button
			    class="transition duration-75 text-blue-400 hover:scale-105 hover:text-blue-300 active:scale-100 active:text-blue-400"
			  >
			    My button
			  </button>
			</div>
		`);
	})
})