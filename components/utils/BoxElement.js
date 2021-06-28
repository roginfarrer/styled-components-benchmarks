import React, { forwardRef } from 'react';
import isPropValid from '@emotion/is-prop-valid';
import generateTestIds from './generateTestIds';

const systemPropNames = new Set(['color', 'bg', 'm']);

// Derived from @emotion/memoize
// https://github.com/emotion-js/emotion/blob/734b36bf113032a7e4ac96741f81ebd12a6244d4/packages/memoize/src/index.js
function memoize(fn) {
  const cache = Object.create(null);

  return (arg) => {
    if (cache[arg] == null) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const shouldForwardProp = memoize(
  (prop) => !systemPropNames.has(prop) && isPropValid(prop)
);

function filterProps(props) {
  const filteredProps = {};

  for (const prop in props) {
    if (shouldForwardProp(prop)) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
}

const BoxElement = forwardRef(function BoxElement(
  { testIds, is = 'div', 'data-hb-id': dataHbId, ...props },
  forwardedRef
) {
  const filteredProps = filterProps(props);

  // If "is" is a string, it should be a raw HTML element, so we will generateTestIds for it. Otherwise, forward along the testIds prop
  const forwardedTestIds =
    typeof is === 'string' ? generateTestIds({ testIds }) : { testIds };

  const Component = is;

  return (
    <Component
      {...filteredProps}
      // testIds passed after props, in case `filteredProps` also includes
      // a regular `data-enzyme-id`
      {...forwardedTestIds}
      ref={forwardedRef}
      data-hb-id={dataHbId}
    />
  );
});

export default BoxElement;
