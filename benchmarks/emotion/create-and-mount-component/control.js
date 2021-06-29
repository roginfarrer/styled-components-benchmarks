import React from 'react';
import { TestRunner } from '../../TestRunner';
import Badge from '../../../components/EmotionBadge/control';

const Test = ({ testIndex }) => {
  return <Badge>testing</Badge>;
};

const StitchesTest = () => {
  return <TestRunner numberOfRuns={3} iterationN={1000} TestComponent={Test} />;
};

export default StitchesTest;
