"use client";
import './Fancy.css';
import { useState } from 'react';
export default function Fancy()
{
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <Counter isFancy={true} />
            ) : (
                <Counter isFancy={false} />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => {
                        setIsFancy(e.target.checked)
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}
function Counter({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'counter';
    if (hover) {
        className += ' hover';
    }
    if (isFancy) {
        className += ' fancy';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}