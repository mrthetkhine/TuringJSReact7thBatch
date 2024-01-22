"use client";
import { useState } from 'react';
import Counter from "../Counter";
import HelloWorld from "../HelloWorld";

export default function RenderingDemo()
{
    const [showB, setShowB] = useState(true);
    const [div, setDiv] = useState(false);
    return (<div>
        {div && <HelloWorld/>}
        <Counter></Counter>
        &nbsp;
        {showB && <Counter />}
        <label>
            <input
                type="checkbox"
                checked={showB}
                onChange={e => {
                    setShowB(e.target.checked)
                }}
            />
            Render the second counter
        </label>
        <button type={"button"}
                onClick={()=>setDiv(!div)}>Add div</button>
    </div>);
}