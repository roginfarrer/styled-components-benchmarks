import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/mount-wide-tree/themed'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
