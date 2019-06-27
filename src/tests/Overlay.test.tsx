import React from 'react';
import { render } from '@testing-library/react';
import Overlay from '../../src/Overlay';

describe('Overlay', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Overlay />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
