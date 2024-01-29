"use client";
import {useId} from "react";

export default function IdDemo()
{
    const id= useId();
    return (<div>
        Key {id}
    </div>);
}