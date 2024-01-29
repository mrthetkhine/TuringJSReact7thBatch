"use client";
import CustomFormik, {CusField} from "./CustomFormik";

export default function CustomFormikDemo({})
{
    let initialValue = {
        name :'demo',
        email:'',
    };
    const onSubmitHandler=(values)=>{
      console.log('Form submit ',values);
    };
    return(<CustomFormik initialValues={initialValue} onSubmit={onSubmitHandler}>
            <label>name</label>
            <CusField name={'name'}/>
            <br/>
            <label>Email</label>
            <CusField name={'email'}/>
            <br/>
            <button type={"submit"}
                    className={"btn btn-primary"}>Submit</button>
    </CustomFormik>);
}