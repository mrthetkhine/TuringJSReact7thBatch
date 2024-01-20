"use client"
import {useState} from "react";
import Counter from "../Counter";

export default function Parent()
{
    const [count,setCount]=useState(0);
    const countHandler=()=>{
        setCount(count+1);
    };
    console.log("Parent render");
    return(<div>
        Parent counter {count}
        <button
            type={"button"}
            onClick={countHandler}>Parent +</button>
        <Counter/>
    </div>);
}