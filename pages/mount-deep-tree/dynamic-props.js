import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/mount-deep-tree/dynamic-props'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
