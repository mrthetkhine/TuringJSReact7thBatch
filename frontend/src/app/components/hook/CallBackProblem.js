"use client";
import {memo, useCallback, useState} from "react";

export function ChildComponent({callback})
{
    console.log('Child render');
    return (<button onClick={callback}
                    type={"button"}>
            Click me
        </button>
    )
}
let cb;
const Child = memo(ChildComponent);
export default function CallBackProblem()
{
    const [state,setState] = useState(new Date());
    const callBack= useCallback( ()=>{
        console.log('Callback in parent');
    },[]);

    /*
    const callBack= ()=>{
        console.log('Callback in parent');
    };

     */

    if(!cb)
    {
        cb = callBack;
    }
    console.log('Cb ==callback ',cb==callBack);
    const btnChangeHandler = ()=>{
        setState(new Date());
    };
    console.log('parent render');
    return(<div>
        Date{state.toString()}
        <button type={"button"} onClick={btnChangeHandler}>
            Change
        </button>
        <Child callback={callBack}/>
    </div>);
}