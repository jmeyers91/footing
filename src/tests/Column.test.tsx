import React from 'react';
import { render } from '@testing-library/react';
import Column from '../../src/Column';

describe('Column', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Column />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
