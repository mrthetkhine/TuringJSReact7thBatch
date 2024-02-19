"use client";
export default function Page({ params }: { params: { slug: [string] } }) {
  console.log('Params ',params.slug);
    return (
    <>
     
      <p>
        Shop catch all page {params.slug}
      </p>
    </>
  );
}
