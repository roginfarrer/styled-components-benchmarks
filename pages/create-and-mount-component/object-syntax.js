import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/create-and-mount-component/object-syntax'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
