import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () =>
      import('../../benchmarks/nested-styled-component-architecture/control'),
    { ssr: false }
  );

  return <OneTest />;
};

export default CreateAndMountComponent;
