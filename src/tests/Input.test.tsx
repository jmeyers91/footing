import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../src/Input';

describe('Input', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
