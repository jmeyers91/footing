import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from '../Form';

storiesOf('Form', module).add('Submit handler', () => (
  <Form style={{ width: 200, height: 100 }} onSubmit={() => alert('Submit!')}>
    <div style={{ background: 'red', flex: 1 }} />
    <div style={{ background: 'green', flex: 1 }} />
    <div style={{ background: 'blue', flex: 1 }} />
    <button>Submit</button>
  </Form>
));
