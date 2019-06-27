import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';

storiesOf('Button', module)
  .add('with text', () => <Button>Click me</Button>)
  .add('empty', () => <Button />)
  .add('disabled', () => <Button disabled>Disabled</Button>);
