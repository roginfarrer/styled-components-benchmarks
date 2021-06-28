import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/update-variant/no-props'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
