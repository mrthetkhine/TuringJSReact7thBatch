import {useState} from "react";

export default function useInput(formData)
{
    //console.log('Formdata ',formData);
    const [state,setState] = useState(formData);
    function handler(propertyName)
    {
        return function(event)
        {
            setState({
                ...state,
                [propertyName]:event.target.value
            });
        }
    }
    return {state,handler};
}