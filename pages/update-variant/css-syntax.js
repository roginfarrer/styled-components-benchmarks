import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/update-variant/css-syntax'),
    {
      ssr: false,
    }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
