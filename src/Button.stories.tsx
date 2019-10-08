import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { ForwardRefButton } from './ForwardRefButton';

const s = storiesOf('Buttons', module);

s.add(
  'Button',
  () => (
    <>
        <p>This will correctly show prop types</p>
        <Button></Button>
    </>
  ),
);

s.add(
    'ForwardRefButton',
    () => (
      <>
          <p>This will not show prop types and have a corrupted story source</p>
          <ForwardRefButton></ForwardRefButton>
      </>
    ),
  );
  