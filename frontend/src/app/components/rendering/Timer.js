"use client";
import {useState,useEffect} from "react";


export default function Timer()
{
    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000);
    })
    return (<div>
        <h1>Timer</h1>
        <div>{time.toString()}</div>
    </div>);
}