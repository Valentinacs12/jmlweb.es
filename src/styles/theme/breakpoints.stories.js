import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from '../../components/Box';

import { breakpointsObj } from './breakpoints';

const StyledBreakpoint = Box.extend`
  width: ${props => props.size};
  height: 400px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  display: flex;
  opacity: 0.5;
  @media (min-width: ${props => props.size}) {
    opacity: 1;
  }
`;

storiesOf('Theme/Breakpoints', module).add('all', () =>
  Object.keys(breakpointsObj).map(breakpointKey => (
    <StyledBreakpoint
      color="white"
      bg="primary"
      mb={5}
      key={breakpointKey}
      size={breakpointsObj[breakpointKey]}
    >
      {breakpointKey}: {breakpointsObj[breakpointKey]}
    </StyledBreakpoint>
  )));
