import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import themed from '../utils/themed';

const StyledBadge = styled('span')(({ theme }) => {
  return {
    fontSize: theme.fontSizes[500],
    borderRadius: 2,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `0 ${theme.space[1000]}`,
    color: theme.colors.black80,

    '&.variation--muted': {
      backgroundColor: theme.colors.black20,
    },
    '&.variation--muted.type--indicator': {
      backgroundColor: theme.colors.black50,
    },

    '&.variation--b2b': {
      backgroundColor: theme.colors.b2bCore10,
    },
    '&.variation--b2b.type--indicator': {
      backgroundColor: theme.colors.b2bCore60,
    },

    '&.variation--sale': {
      backgroundColor: theme.colors.sale20,
    },
    '&.variation--sale.type--indicator': {
      backgroundColor: theme.colors.sale50,
    },

    '&.variation--error': {
      backgroundColor: theme.colors.red20,
    },
    '&.variation--error.type--indicator': {
      backgroundColor: theme.colors.red50,
    },

    '&.variation--success': {
      backgroundColor: theme.colors.green20,
    },
    '&.variation--success.type--indicator': {
      backgroundColor: theme.colors.green50,
    },

    '&.variation--warning': {
      backgroundColor: theme.colors.yellow20,
    },
    '&.variation--warning.type--indicator': {
      backgroundColor: theme.colors.yellow40,
    },

    '&.variation--primaryTint': {
      backgroundColor: theme.colors.core20,
    },
    '&.variation--primaryTint.type--indicator': {
      backgroundColor: theme.colors.core60,
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
  };
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
