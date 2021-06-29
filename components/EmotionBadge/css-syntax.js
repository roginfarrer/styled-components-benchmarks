import React from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';

const StyledBadge = styled('span')`
  font-size: 12px;
  border-radius: 2;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  color: black;

  &.variation--muted {
    background-color: lightgray;
  }
  &.variation--muted.type--indicator {
    background-color: gray;
  }

  &.variation--b2b {
    background-color: indigo;
  }
  &.variation--b2b.type--indicator {
    background-color: indigo;
  }

  &.variation--sale {
    background-color: pink;
  }
  &.variation--sale.type--indicator {
    background-color: pink;
  }

  &.variation--error {
    background-color: red;
  }
  &.variation--error.type--indicator {
    background-color: red;
  }

  &.variation--success {
    background-color: green;
  }
  &.variation--success.type--indicator {
    background-color: green;
  }

  &.variation--warning {
    background-color: yellow;
  }
  &.variation--warning.type--indicator {
    background-color: yellow;
  }

  &.variation--primaryTint {
    background-color: blue;
  }
  &.variation--primaryTint.type--indicator {
    background-color: blue;
  }

  &.type--indicator,
  &.type--numeric {
    borderradius: 50vw;
  }

  &.type--indicator {
    display: inline-block;
    width: 8;
    height: 8;
    // reset the styles fromm the default Badge type
    padding: null;
    justifycontent: null;
    alignitems: null;
  }

  &.type--numeric {
    padding: 0.2em 0.4em;
    minwidth: 24;
  }
`;

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
