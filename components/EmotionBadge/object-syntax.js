import React from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';

const StyledBadge = styled('span')({
  fontSize: '12px',
  borderRadius: 2,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 8px',
  color: 'black',

  '&.variation--muted': {
    backgroundColor: 'lightgray',
  },
  '&.variation--muted.type--indicator': {
    backgroundColor: 'gray',
  },

  '&.variation--b2b': {
    backgroundColor: 'indigo',
  },
  '&.variation--b2b.type--indicator': {
    backgroundColor: 'indigo',
  },

  '&.variation--sale': {
    backgroundColor: 'pink',
  },
  '&.variation--sale.type--indicator': {
    backgroundColor: 'pink',
  },

  '&.variation--error': {
    backgroundColor: 'red',
  },
  '&.variation--error.type--indicator': {
    backgroundColor: 'red',
  },

  '&.variation--success': {
    backgroundColor: 'green',
  },
  '&.variation--success.type--indicator': {
    backgroundColor: 'green',
  },

  '&.variation--warning': {
    backgroundColor: 'yellow',
  },
  '&.variation--warning.type--indicator': {
    backgroundColor: 'yellow',
  },

  '&.variation--primaryTint': {
    backgroundColor: 'blue',
  },
  '&.variation--primaryTint.type--indicator': {
    backgroundColor: 'blue',
  },

  '&.type--indicator, &.type--numeric': {
    borderRadius: '50vw',
  },

  '&.type--indicator': {
    display: 'inline-block',
    width: 8,
    height: 8,
    // reset the styles fromm the default Badge type
    padding: null,
    justifyContent: null,
    alignItems: null,
  },

  '&.type--numeric': {
    padding: '0.2em 0.4em',
    minWidth: 24,
  },
});

export default function Badge({
  children,
  variation = 'primaryTint',
  type = 'text',
}) {
  return (
    <StyledBadge
      variation={variation}
      type={type}
      className={cx(`variation--${variation}`, `type--${type}`)}
    >
      {children}
    </StyledBadge>
  );
}
