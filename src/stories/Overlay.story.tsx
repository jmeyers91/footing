import React from 'react';
import { storiesOf } from '@storybook/react';
import Overlay from '../Overlay';

storiesOf('Overlay', module)
  .add('Default - Fills container', () => (
    <div
      style={{
        position: 'relative',
        width: 500,
        height: 500,
        background: 'pink'
      }}
    >
      <Overlay color="rgba(0,0,255,0.8)">
        <div style={{ background: 'red', height: 100, width: 100 }} />
        <div style={{ background: 'green', height: 100, width: 100 }} />
        <div style={{ background: 'blue', height: 100, width: 100 }} />
      </Overlay>
    </div>
  ))
  .add('Fixed - Fills body', () => (
    <div
      style={{
        position: 'relative',
        width: 500,
        height: 500,
        background: 'pink'
      }}
    >
      <Overlay fixed color="rgba(0,0,255,0.8)">
        <div style={{ background: 'red', height: 100, width: 100 }} />
        <div style={{ background: 'green', height: 100, width: 100 }} />
        <div style={{ background: 'blue', height: 100, width: 100 }} />
      </Overlay>
    </div>
  ));
