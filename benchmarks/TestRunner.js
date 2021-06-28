import React, { Profiler, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createId } from './utils/createId';
import { TestResults } from './TestResults';

/** This component runs a single run of the test, from 0...N */
const TestAndRefresh = ({ runIndex, testInfo, TestComponent }) => {
  /** Stores individual results in an array until the test is done and we can crunch them */
  const iterationResults = [];

  useEffect(() => {
    if (iterationResults.length !== testInfo.N) {
      throw new Error(
        `Did not calculate N: ${testInfo.N} results (received ${iterationResults.length} results)`
      );
    }

    const firstIteration = iterationResults[0];
    const lastIteration = iterationResults[iterationResults.length - 1];

    // Build the median
    const sortedResults = iterationResults.sort((a, b) =>
      Number(a) > Number(b) ? 1 : -1
    );
    const medianIteration = sortedResults[Math.round(sortedResults.length / 2)];

    const fastestIteration = sortedResults[0];
    const slowestIteration = sortedResults[sortedResults.length - 1];

    // Build the mean
    let sumOfIterationTime = 0;
    for (let i = 0; i < iterationResults.length; i++) {
      sumOfIterationTime += iterationResults[i];
    }
    const meanIteration = sumOfIterationTime / iterationResults.length;

    // Build the variance
    let sumOfSquaredDifferences = 0;
    for (let i = 0; i < iterationResults.length; i++) {
      const difference = meanIteration - iterationResults[i];
      const squaredDifference = Math.pow(difference, 2);
      sumOfSquaredDifferences += squaredDifference;
    }
    const variance = sumOfSquaredDifferences / iterationResults.length;

    // Pop the results into the testInfo:
    testInfo.results[runIndex] = {
      N: testInfo.N,
      firstIteration,
      lastIteration,
      fastestIteration,
      slowestIteration,
      medianIteration,
      meanIteration,
      variance,
    };
    // Serialize the testInfo and pop it back onto localStorage:
    localStorage.setItem(testInfo.testId, JSON.stringify(testInfo));

    // Refresh for the next test or finish the test
    if (runIndex === testInfo.numberOfRuns - 1) {
      // This was the last test, redirect to the results
      window.location.href = `?testId=${testInfo.testId}&finished=true`;
    } else {
      // We have more sample sizes to run, +1 the sampleIndex
      window.location.href = `?testId=${testInfo.testId}&runIndex=${
        runIndex + 1
      }`;
    }
  });

  function handleProfilerData(
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) {
    iterationResults.push(actualDuration);
  }

  /** An array with the size of N */
  const loops = [...Array(testInfo.N)];

  return (
    <>
      {loops.map((value, index) => {
        return (
          <Profiler
            key={index}
            id={testInfo.testId}
            onRender={handleProfilerData}
          >
            <TestComponent testIndex={index} />
          </Profiler>
        );
      })}
    </>
  );
};

export const TestRunner = ({
  /** The component to run inside the profiler */
  TestComponent,
  /** How many times to run the entire test (to check for variance) */
  numberOfRuns,
  /** The N number of iterations to run inside each test */
  iterationN,
}) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const router = useRouter();
  const { testId, runIndex, finished } = router.query;

  if (!testId) {
    // No test is running yet
    const newTestId = createId();

    const testInfo = {
      testId: newTestId,
      N: iterationN,
      numberOfRuns,
      results: {},
    };
    localStorage.setItem(newTestId, JSON.stringify(testInfo));

    return <a href={`?testId=${newTestId}&runIndex=0`}>start test</a>;
  } else if (typeof testId === 'string') {
    // We are mid-test or finished with a test
    if (typeof finished !== 'undefined') {
      // Test is done!
      const testInfo = JSON.parse(localStorage.getItem(testId));

      return <TestResults testInfo={testInfo} />;
    } else {
      // We have a test to run

      /** Which sample size are we doing this run? */
      const runNumber = typeof runIndex === 'string' ? Number(runIndex) : 0;
      try {
        /** Grab the test info cache from storage */
        const testInfo = JSON.parse(localStorage.getItem(testId));
        return (
          <TestAndRefresh
            runIndex={runNumber}
            testInfo={testInfo}
            TestComponent={TestComponent}
          />
        );
      } catch (err) {
        console.error(err);
      }
    }
  }

  return null;
};
