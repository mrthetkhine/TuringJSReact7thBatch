"use client";
import {useGetAllUserQuery, userApi} from "@/lib/redux/services/users";
import {useState} from "react";
import {useDispatch} from "@/lib/redux";


function Count()
{
    const dispatch = useDispatch();
    const { data, error, isLoading,refetch } = useGetAllUserQuery();
    function handleRefetchOne() {
        // force re-fetches the data
        refetch()
    }
    console.log('API ',userApi.endpoints);
    function handleRefetchTwo() {
        // has the same effect as `refetch` for the associated query
        dispatch(
            userApi.endpoints.getAllUser.initiate(),
        )
    }
    if(data)
    {
        return (<div>

            User count is {data.length}
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={handleRefetchOne}>Refetch</button>
            &nbsp;
            <button type={"button"}
                    className={"btn btn-primary"}
                    onClick={handleRefetchTwo}>Refetch 2</button>
        </div>)
    }
    else if(isLoading)
    {
        return (<div>
            Loading...
        </div>)
    }
    else
    {
        return (<div>Error</div>);
    }
}
export default function UserCount()
{

    const [show,setShow] = useState(true);

    const onClickHandler = ()=>{
        setShow(!show);
    }
    return (<div>
        Show {show}
        <button type={"button"}
                className={"btn btn-primary"}
                onClick={onClickHandler}>Toggle</button>
        {
            show && <Count/>
        }
    </div>)

}