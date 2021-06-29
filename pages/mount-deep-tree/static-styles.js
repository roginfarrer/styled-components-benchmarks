import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/mount-deep-tree/static-styles'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
