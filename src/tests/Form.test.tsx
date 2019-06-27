import React from 'react';
import { render } from '@testing-library/react';
import Form from '../../src/Form';

describe('Form', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Form />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
