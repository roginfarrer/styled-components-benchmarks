import React from 'react';
import { TestRunner } from '../TestRunner';
import Badge from '../../components/Badge/control';

const Test = ({ testIndex }) => {
  const variants = {
    type: testIndex % 2 === 0 ? 'text' : 'numeric',
    variation: testIndex % 2 === 0 ? 'success' : 'error',
  };
  return <Badge {...variants}>testing</Badge>;
};

const StitchesTest = () => {
  return (
    <>
      <TestRunner numberOfRuns={3} iterationN={10000} TestComponent={Test} />

      <div style={{ opacity: 0, pointerEvents: 'none' }}>
        <Badge>
          we mount the button outside the test to make sure we're not clocking
          any mount time
        </Badge>
      </div>
    </>
  );
};

export default StitchesTest;
