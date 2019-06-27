import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../Modal';

storiesOf('Modal', module)
  .add('Default', () => (
    <div
      style={{ background: '#000', width: 100, height: 100, color: 'white' }}
    >
      Container
      <Modal style={{ width: 500, height: 100 }}>
        <div style={{ background: 'red', flex: 1 }}>Modals are columns</div>
        <div style={{ background: 'green', flex: 1 }} />
        <div style={{ background: 'blue', flex: 1 }} />
      </Modal>
    </div>
  ))
  .add('Overflow', () => (
    <div
      style={{ background: '#000', width: 100, height: 100, color: 'white' }}
    >
      Container
      <Modal style={{ width: 500 }}>
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
        <div style={{ background: 'red', height: 100 }} />
        <div style={{ background: 'green', height: 100 }} />
        <div style={{ background: 'blue', height: 100 }} />
      </Modal>
    </div>
  ));
