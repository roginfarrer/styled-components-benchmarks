import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/update-variant/no-themed'),
    {
      ssr: false,
    }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
