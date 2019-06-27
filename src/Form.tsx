import React, { FormEvent, ComponentProps, useCallback } from 'react';
import styled from 'styled-components';

export function Form(props: ComponentProps<'form'>) {
  const { onSubmit } = props;

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { onSubmit } = props;
      if (onSubmit) {
        onSubmit(event);
      }
    },
    [onSubmit]
  );

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
