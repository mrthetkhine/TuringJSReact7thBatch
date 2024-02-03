"use client";
import useInput from "./useInput";

export default function FormWithUseInputHookDemo()
{
    const {state,handler} = useInput({
        name :'',
        email:''
    });
    const submitHandler = (event)=>{
      console.log("state ",state);
      event.preventDefault();
    };
    return <div>
        <form onSubmit={submitHandler}>
            <input type={"text"}
                    value={state.name}
                    onChange={handler('name')}/>
            <br/>
            <input type={"text"}
                   value={state.email}
                   onChange={handler('email')}/>
            <br/>
            <button type={"submit"}>Submit</button>
        </form>
    </div>
}