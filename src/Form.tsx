import React, { FormEvent, ComponentProps } from 'react';
import styled from 'styled-components';

export function Form(props: ComponentProps<'form'>) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(event);
    }
  }

  return <form {...props} onSubmit={handleSubmit} />;
}

/**
 * Form element that calls `preventDefault` on submit events automatically.
 * @param props
 */
export default styled(Form)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  box-sizing: border-box;
`;
