"use client";
import {useState} from "react";

interface GreetingProp
{
    message:string
}
export default function Greeting({message}:GreetingProp)
{
    const [count,setCount] = useState(0);
    return (<div>
        Hello {message.toUpperCase()}
        Count {count}
        <br/>
        <button type={"button"} onClick={()=>setCount(count+1)}>Inc</button>
    </div>)
}