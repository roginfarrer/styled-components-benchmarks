import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () =>
      import('../../../benchmarks/emotion/create-and-mount-component/control'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
