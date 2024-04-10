import {render} from '@testing-library/react';
import {Input} from './Input.tsx';

describe(`Component: ${Input.name}`, () => {
	it('should render', () => {
		const { container} = render(<Input/>);

		expect(container).toMatchInlineSnapshot(`
			<div>
			  <input
			    autocomplete="off"
			    class="w-full border border-gray-200 p-2 rounded-lg transition-all duration-100 outline-none focus:outline-primary-500 focus:border-transparent placeholder:text-gray-400 placeholder:text-sm"
			    type="text"
			  />
			</div>
		`);
	});
});