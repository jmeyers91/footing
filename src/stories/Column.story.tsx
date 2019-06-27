import React from 'react';
import { storiesOf } from '@storybook/react';
import Column from '../Column';

storiesOf('Column', module).add('Default', () => (
  <Column style={{ height: 300, width: 500 }}>
    <div style={{ background: 'red', flex: 1 }} />
    <div style={{ background: 'green', flex: 2 }} />
    <div style={{ background: 'blue', flex: 2 }} />
  </Column>
));
