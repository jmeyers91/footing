import React from 'react';
import { render } from '@testing-library/react';
import Page from '../../src/Page';

describe('Page', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Page />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
