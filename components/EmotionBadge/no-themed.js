import React from 'react';
import styled from '@emotion/styled';
import useLocalVariables from '../utils/useLocalVariables';

const themeOverrides = {
  defaults() {
    return {
      fontWeight: null,
    };
  },
  partnerhome() {
    return {
      fontWeight: 'bold',
    };
  },
};

function getVariationStyles({ theme, variation, type }) {
  const isIndicator = type === 'indicator';

  switch (variation) {
    case 'primaryTint': {
      return {
        backgroundColor: isIndicator
          ? theme.colors.core60
          : theme.colors.core20,
      };
    }
    case 'muted': {
      return {
        backgroundColor: isIndicator
          ? theme.colors.black50
          : theme.colors.black20,
      };
    }
    case 'b2b': {
      return {
        backgroundColor: isIndicator
          ? theme.colors.b2bCore60
          : theme.colors.b2bCore10,
      };
    }
    case 'sale': {
      return {
        backgroundColor: isIndicator
          ? theme.colors.sale50
          : theme.colors.sale20,
      };
    }
    case 'error': {
      return {
        backgroundColor: isIndicator ? theme.colors.red50 : theme.colors.red20,
      };
    }
    case 'success': {
      return {
        backgroundColor: isIndicator
          ? theme.colors.green50
          : theme.colors.green20,
      };
    }
    case 'warning': {
      return {
        backgroundColor: isIndicator
          ? theme.colors.yellow40
          : theme.colors.yellow20,
      };
    }
    default: {
      return {};
    }
  }
}

const StyledBadge = styled('span')(({ theme, variation, type }) => {
  const overrides = useLocalVariables(themeOverrides);
  return {
    fontSize: theme.fontSizes[500],
    borderRadius: 2,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `0 ${theme.space[1000]}`,
    color: theme.colors.black80,
    fontWeight: overrides.fontWeight,
    ...getVariationStyles({ theme, variation, type }),
    ...(type === 'indicator' || type === 'numeric'
      ? {
          borderRadius: '50vw',
        }
      : {}),
    ...(type === 'indicator'
      ? {
          display: 'inline-block',
          width: 8,
          height: 8,
          // reset the styles fromm the default Badge type
          padding: null,
          justifyContent: null,
          alignItems: null,
        }
      : {}),
    ...(type === 'numeric'
      ? {
          padding: '0.2em 0.4em',
          minWidth: 24,
        }
      : {}),
  };
});

export default function Badge({
  children,
  variation = 'primaryTint',
  type = 'text',
}) {
  return (
    <StyledBadge variation={variation} type={type}>
      {children}
    </StyledBadge>
  );
}
