import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const OneTest = dynamic(
    () => import('../../benchmarks/create-and-mount-component/control'),
    { ssr: false }
  );

  console.log(OneTest);

  return <OneTest />;
};

function Foo() {
  return <div>hello!</div>;
}

export default CreateAndMountComponent;
