import dynamic from "next/dynamic";

const CreateAndMountComponent = () => {
  const OneTest = dynamic(() => import("../../benchmarks/update-variant/two"), {
    ssr: false,
  });

  return <OneTest />;
};

export default CreateAndMountComponent;
