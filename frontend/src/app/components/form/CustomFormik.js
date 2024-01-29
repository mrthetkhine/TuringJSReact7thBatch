"use client";
import {useState} from "react";

export function CusField(props)
{
    return <input {...props}/>;
}
export function ControlInput(props)
{
    console.log(" ControlInput Props ",props);
    return <input {...props} />;
}
export default function CustomFormik({children,initialValues,onSubmit})
{
    const [values,setValues] = useState(initialValues);
    console.log('initialValues ',initialValues);

    console.log('Children ',children);

    //console.log('Tra ',transformedChild);
    const onChange= (e)=>{
        let value= e.target.value;
        console.log('e.target ',e.target);
        setValues({
           ...values,
           [e.target.name]:value
        });
    };
    const onSubmitHandler=(e)=>{
        onSubmit(values);
        e.preventDefault();
    }
    return (<div>
        <form onSubmit={onSubmitHandler}>
        {
            children.map((child,index)=>{
                return child.type=== CusField? <ControlInput
                                                    key={index}
                                                    value={values[child.props.name]}
                                                    onChange={onChange}
                                                    {...child.props}/>:child
            })
        }
        </form>
    </div>);
}