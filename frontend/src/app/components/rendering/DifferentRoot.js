"use client";
import { useState } from 'react';
import Counter from "../Counter";
export default function DifferentRoot()
{
    const [showB, setShowB] = useState(true);

    return (
        <>
        {
            showB?<span>
                <Counter/>
            </span>:
                <div>
                    <Counter/>
                </div>

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
        </>
    );
}