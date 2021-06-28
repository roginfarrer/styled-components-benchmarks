const invalidArgsMsg = (testIds) =>
  `generateTestIds received \`${JSON.stringify(
    testIds
  )}\`. Each key must be provided a string whose length is greater than 0.`;

export default function generateTestIds({ testIds, postfix }) {
  if (testIds == null) {
    // If testIds are undefined or null, then exit early and return a spreadable object
    return {};
  }
  return Object.entries(testIds).reduce((testIds, [key, value]) => {
    if (typeof value !== 'string' || value.length < 1) {
      throw new Error(invalidArgsMsg(testIds));
    }
    return {
      ...testIds,
      [`data-${key}-id`]: postfix ? `${value}-${postfix}` : value,
    };
  }, {});
}
