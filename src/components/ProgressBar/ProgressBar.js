/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    borderRadius: '4px',
    height: '0.5rem',
    padding: '0px'
  },
  medium: {
    borderRadius: '4px',
    height: '0.75rem',
    padding: '0px'
  },
  large: {
    borderRadius: '8px',
    height: '1rem',
    padding: '4px'
  }
}

const ProgressBar = ({ value, size }) => {
  const sizeVars = {
    '--border-radius': SIZES[size].borderRadius,
    '--height': SIZES[size].height,
    '--padding': SIZES[size].padding
  };

  return (
    <Wrapper
      aria-valuenow={value}
      role="progressbar"
      style={sizeVars}
    >
      <BarWrapper>
        <BarFill value={value}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </BarFill>
      </BarWrapper>
    </Wrapper>
    );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  width: 100%;
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: ${props => props.value}%;
`;

export default ProgressBar;
