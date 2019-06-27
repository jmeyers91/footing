import React from 'react';
import { storiesOf } from '@storybook/react';
import Row from '../Row';

storiesOf('Row', module).add('Default', () => (
  <Row style={{ height: 300, width: 500 }}>
    <div style={{ background: 'red', flex: 1 }} />
    <div style={{ background: 'green', flex: 1 }} />
    <div style={{ background: 'blue', flex: 1 }} />
  </Row>
));
