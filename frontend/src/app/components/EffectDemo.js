"use client";
import {useEffect, useState} from "react";

export default function EffectDemo()
{
    const [state,setState] = useState(Math.random());
    const [state2,setState2] = useState(new Date());
    useEffect(()=>{
       console.log('Side Effect run');
    },[state]);
    console.log('Render ');
    return(<div>
        Effect demo {state}
        Date {state2.toString()}
        <button type={"button"}
                onClick={()=>setState(Math.random())}>Change</button>
        <br/>
        <button type={"button"}
                onClick={()=>setState2(new Date())}>Change Date</button>
    </div>);
}