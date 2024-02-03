"use client";
import FormikRenderProperty from "./FormikRenderProperty";

export default function FormikRenderPropDemo()
{
    const initValues = {
        name :'',
        email:''
    }
    return (<FormikRenderProperty initialValue={initValues}>
        {
            ({state, handler,onSubmit})=>{
                //console.log('State ', state, 'handler ',handler);
                return (
                <form>
                    <input type={"text"}
                            name={"name"}
                           value={state.name}
                           onChange={handler('name')}/>
                    <br/>
                    <input type={"text"}
                           name={"email"}
                           value={state.email}
                           onChange={handler('email')}/>
                    <button type={"submit"}
                            onSubmit={(event)=>onSubmit(event)}
                        >Submit</button>
                </form>
            )}
        }
    </FormikRenderProperty>);
}
