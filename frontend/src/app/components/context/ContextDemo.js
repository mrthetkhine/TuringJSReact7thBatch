"use client";
import Section from "./Section";
import Heading from "./Heading";
import {useState} from "react";
import { LevelContext } from './LevelContext.js';
export default function ContextDemo()
{
    const [level,setLevel] = useState(1);
    const [levelText,setLevelText] = useState(1);
    const changeHandler =(e)=>{
        setLevelText(e.target.value);
    };
    const updateHandler = ()=>{
        console.log('Level text ',setLevelText);
        setLevel(+levelText);

    };
    console.log('Render context demo');
    return (<div>
        <input type="text" value={levelText}
                            onChange={changeHandler}/>
        <button type={"button"}
                onClick={updateHandler}>
            Update
        </button>
        <LevelContext.Provider value={level}>
            <Section >

            </Section>
        </LevelContext.Provider>
    </div>);
}