import {Metadata} from "next";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Movies Details page {params.id}</h1>

    </>
  );
}

