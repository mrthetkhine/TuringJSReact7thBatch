"use client";
import { useState } from 'react';

export default function Counter()
{
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(new Date())
    console.log('Re render');
    const incHandler = ()=>{
        //count++;
        setCount(count+1);
        setDate(new Date());
        console.log("Count is "+count);
    }
    const timeChangeHandler =()=>{
        setDate(new Date());
    }
    return (<div>
        Counter {count}
        <br/>
        Date {date.toString()}
        <button type={"button"}
            onClick={incHandler}>+</button>
        <button type={"button"}
                onClick={timeChangeHandler}>Change</button>
    </div>);
}