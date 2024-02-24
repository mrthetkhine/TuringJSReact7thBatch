"use client";
import { useRef,forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
})
export default function OtherDOMRefDemo()
{
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();

    }
    return(<div>
        <MyInput ref={inputRef}/>
        <button onClick={handleClick}>
            Focus the input
        </button>
    </div>);
}