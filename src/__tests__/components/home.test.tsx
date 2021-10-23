import Home from '@views/home';
import React from 'react';
import { render } from '../__utils__/test-utils';

describe('Home', () => {
  it('should render Home component', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
