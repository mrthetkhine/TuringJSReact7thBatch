"use client";
import { useRouter } from 'next/navigation'
async function getData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,3000);
    });
}
export default async function Page() {
    const router = useRouter();
    const data = await getData();

    const btnHandler = ()=>{
        console.log('Go to movie');
        router.push('/movies');
    };
  return (
    <>
      <h1>Dashboard/Home</h1>
        <button type={"button"}
                onClick={btnHandler}>
            Go to movies
        </button>
    </>
  );
}
