import React from 'react';
import { render } from '@testing-library/react';
import Row from '../../src/Row';

describe('Row', () => {
  test('Should match snapshot', () => {
    const { container } = render(<Row />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
