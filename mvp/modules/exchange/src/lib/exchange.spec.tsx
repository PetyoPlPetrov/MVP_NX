import { render } from '@testing-library/react';

import Exchange from './exchange';

describe('Exchange', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Exchange />);
    expect(baseElement).toBeTruthy();
  });
});
