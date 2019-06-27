import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../src/Button';

describe('Button', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
