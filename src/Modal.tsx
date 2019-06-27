import React, { ComponentProps, MouseEvent } from 'react';
import styled from 'styled-components';
import Overlay, { isOverlay } from './Overlay';
import Column from './Column';

export interface Props extends ComponentProps<typeof Column> {
  onOverlayClick?(event: MouseEvent<HTMLDivElement>): any;
}

function Modal(props: Props) {
  const { onOverlayClick, ...rest } = props;

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (onOverlayClick && isOverlay(event.target as HTMLElement)) {
      onOverlayClick(event);
    }
  }

  return (
    <Overlay fixed onClick={handleOverlayClick}>
      <Window {...rest} />
    </Overlay>
  );
}

export default styled(Modal)``;

const Window = styled(Column)`
  align-self: center;
  background-color: white;
  margin-bottom: 10%;
  margin-top: 10%;
  max-width: 90%;
  min-height: 50px;
  min-width: 300px;
`;
