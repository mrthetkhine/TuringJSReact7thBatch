"use client";
import {useState,useRef} from "react";

export default function RefDemo()
{
    const [state,setState] = useState(Math.random());
    let ref = useRef(0);
    const btnHandler = ()=>{
        ref.current ++;
        alert("Counter "+ref.current);
    }
    const btnChange = ()=>{
        setState( Math.random());
    }
    return<div >
        <button type={"button"} onClick={btnHandler}>Inc</button>
        {state}
        <button type={"button"} onClick={btnChange}>Change</button>
    </div>
}