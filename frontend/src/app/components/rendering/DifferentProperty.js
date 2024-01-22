"use client";
import { useState } from 'react';
import Counter from "../Counter";
export default function DifferentProperty()
{
    const [showB, setShowB] = useState(true);

    return (
        <div>
        {
            showB?
                <Counter key={"1"} name={"Hello"}/> :
                <Counter key="2" name={"Hi"}/>


        }
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
        </div>
    );
}