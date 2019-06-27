import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import Row from './Row';

function Input(props: ComponentProps<'input'>) {
  const {
    ref,
    value,
    onChange,
    checked,
    placeholder,
    autoCapitalize,
    autoComplete,
    autoFocus,
    autoSave,
    children,
    ...rest
  } = props;

  return (
    <Row {...rest}>
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        checked={checked}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        autoSave={autoSave}
      />
      {children}
    </Row>
  );
}

export default styled(Input)`
  height: 2rem;

  input {
    width: 100%;
    height: 100%;
    font-size: 100%;
    margin: 0 0 0 0;
    padding: 0 1rem 0 1rem;
    border: none;
    outline: none;
  }
`;
