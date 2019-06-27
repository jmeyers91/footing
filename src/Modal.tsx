import React, { ComponentProps, MouseEvent } from 'react';
import styled from 'styled-components';
import Overlay, { isOverlay } from './Overlay';
import Column from './Column';

export interface Props extends ComponentProps<typeof Column> {
  onOverlayClick?(event: MouseEvent<HTMLDivElement>): any;
  fixed?: boolean;
}

function Modal(props: Props) {
  const { onOverlayClick, fixed = true, ...rest } = props;

  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (onOverlayClick && isOverlay(event.target as HTMLElement)) {
      onOverlayClick(event);
    }
  }

  return (
    <StyledOverlay fixed={fixed} onClick={handleOverlayClick}>
      <Window {...rest} />
    </StyledOverlay>
  );
}

export default styled(Modal)``;

const StyledOverlay = styled(Overlay)`
  &:before {
    content: '';
    flex-shrink: 0;
    height: 10vh;
  }

  &:after {
    content: '';
    flex-shrink: 0;
    height: 10vh;
  }
`;

const Window = styled(Column)`
  align-self: center;
  background-color: white;
  max-width: 90%;
  min-height: 50px;
  min-width: 300px;
`;
