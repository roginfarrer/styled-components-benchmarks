import React from 'react';
import { TestRunner } from '../TestRunner';
import { Tree } from '../Tree';
import styled from 'styled-components';

function themed(interpolation) {
  if (process.env.NODE_ENV !== 'test') {
    return interpolation;
  }

  return (props) => {
    const { theme, ...rest } = props;

    // Check for an id that indicates whether or not we have a theme
    if (typeof theme?.meta?.themeId === 'undefined') {
      // Provide a default that has all the theme keys.
      return interpolation({ theme: testTheme, ...rest });
    }

    // Otherwise just provide the theme that we have from the component
    return interpolation({ theme, ...rest });
  };
}

export const Test = ({ testIndex }) => {
  // This purposefully creates the styled component inside the Test component
  // so that we can measure the time it takes using the React profiler

  const getColor = (color) => {
    switch (color) {
      case 0:
        return '#14171A';
      case 1:
        return '#AAB8C2';
      case 2:
        return '#E6ECF0';
      case 3:
        return '#FFAD1F';
      case 4:
        return '#F45D22';
      case 5:
        return '#E0245E';
      default:
        return 'transparent';
    }
  };

  const View = styled('div')(
    themed(() => ({
      alignItems: 'stretch',
      borderWidth: '0',
      borderStyle: 'solid',
      boxSizing: 'border-box',
      display: 'flex',
      flexBasis: 'auto',
      flexDirection: 'column',
      flexShrink: 0,
      margin: '0',
      padding: '0',
      position: 'relative',
      minHeight: '0',
      minWidth: '0',
    }))
  );

  const Box = styled(View)(
    themed((props) => ({
      alignSelf: 'flex-start',
      flexDirection: props.layout === 'column' ? 'column' : 'row',
      padding: props.outer ? '4px' : '0',
      ...(props.fixed
        ? {
            height: '6px',
            width: '6px',
          }
        : {}),

      backgroundColor: getColor(props.color),
    }))
  );

  return <Tree breadth={6} depth={3} id={0} wrap={2} box={Box} />;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={50} TestComponent={Test} />;
};

export default StitchesTest;
