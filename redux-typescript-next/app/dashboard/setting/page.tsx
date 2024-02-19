"use client";
import { redirect } from 'next/navigation'

import { useRouter } from 'next/navigation'
export default async function Page() {
    const router = useRouter();
    //redirect('/movies');
    const btnGoHomeHandler = ()=>{
        router.push('/');
    };
  return (
    <>
      <h1>Dashboard/setting</h1>
       <button type={"button"} onClick={btnGoHomeHandler}>Go home</button>
    </>
  );
}
