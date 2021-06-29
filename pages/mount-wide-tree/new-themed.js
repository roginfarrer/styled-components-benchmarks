import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/mount-wide-tree/new-themed'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
