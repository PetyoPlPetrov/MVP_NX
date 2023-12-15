import { render } from '@testing-library/react';

import Borrow from './borrow';

describe('Borrow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Borrow />);
    expect(baseElement).toBeTruthy();
  });
});
