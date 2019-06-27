import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../../src/Modal';

describe('Modal', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Modal fixed={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
