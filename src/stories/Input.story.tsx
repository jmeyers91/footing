import React, { useState, ComponentProps } from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../Input';

function ControlledInput(
  props: ComponentProps<typeof Input> & { initialValue?: string }
) {
  const { initialValue, ...rest } = props;
  const [value, setValue] = useState(initialValue);

  return (
    <Input
      {...rest}
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
    />
  );
}

storiesOf('Input', module)
  .add('Empty', () => {
    return <ControlledInput />;
  })
  .add('Placeholder', () => {
    return <ControlledInput placeholder="Type here" />;
  })
  .add('Filled', () => {
    return <ControlledInput initialValue="Hello World" />;
  })
  .add('With children', () => (
    <ControlledInput>
      <div style={{ width: 50, background: 'red' }}></div>
    </ControlledInput>
  ));
