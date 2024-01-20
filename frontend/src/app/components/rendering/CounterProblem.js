"use client";
import { useState } from 'react';
export default function CounterProblem() {
    let counter = 0;
    const [number, setNumber] = useState(0);

    const handler =()=>{
        //setNumber(number=>number + 1);
        //setNumber(number=>number + 1);
        setNumber(number+5);
        //setNumber(number+5);
        setNumber(number=>number + 1);
        console.log('After set ',number);
        counter++;
    };
    console.log("Counter in re-render ",counter);
    return (
        <>
            <h1>{number}</h1>
            <button onClick={handler}>+3</button>
        </>
    )
}
