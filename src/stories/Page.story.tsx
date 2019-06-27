import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';

storiesOf('Page', module).add('Default', () => (
  <Page>
    <div style={{ background: 'red', flex: 1 }} />
    <div style={{ background: 'green', flex: 2 }} />
    <div style={{ background: 'blue', flex: 2 }} />
  </Page>
));
