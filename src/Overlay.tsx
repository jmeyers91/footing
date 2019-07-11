import React, { ComponentProps } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import Column from './Column';

const defaultColor = 'rgba(255, 255, 255, 0.7)';

export interface Props extends ComponentProps<typeof Column> {
  /**
   * Whether or not to render the overlay directly inside the `body`.
   */
  fixed?: boolean;

  /**
   * Root element to render the overlay into. Defaults to `document.body`.
   */
  fixedRoot?: HTMLElement;

  /**
   * The background color of the overlay. Defaults to `rgba(255, 255, 255, 0.7)`.
   */
  color?: string;
}

export function Overlay(props: Props) {
  const { fixed, color, fixedRoot, ...rest } = props;

  if (fixed) {
    return ReactDOM.createPortal(
      <Column {...rest} data-overlay />,
      fixedRoot || document.body
    );
  } else {
    return <Column {...rest} data-overlay />;
  }
}

export function isOverlay(target: HTMLElement) {
  return target && target.dataset && target.dataset.overlay;
}

export default styled(Overlay)<Props>`
  position: absolute;
  left: 0;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;

  ${props => {
    const backgroundColor = props.color || defaultColor;
    return props.fixed
      ? css`
          width: 100vw;
          height: 100vh;
          background-color: ${backgroundColor};
        `
      : css`
          width: 100%;
          height: 100%;
          background-color: ${backgroundColor};
        `;
  }}
`;
