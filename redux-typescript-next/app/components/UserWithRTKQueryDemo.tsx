"use client";
import {useDeleteUserByIdMutation, useGetAllUserQuery} from "@/lib/redux/services/users";

export default function UserWithRTKQueryDemo()
{
    const { data, error, isLoading } = useGetAllUserQuery();
    const [deleteUserById, result] = useDeleteUserByIdMutation();
    const onDeleteHandler= ()=>{
        console.log('On delete');
        deleteUserById(1);
    };
    return <div>
        <button type={"button"} className={"btn btn-primary"}>
            Add
        </button>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
                {
                    data.map(user=><div key={user.id}>
                        {user.name}
                        &nbsp;
                        <button type={"button"}
                                onClick={onDeleteHandler}
                                className={"btn btn-primary"}>
                            Delete
                        </button>
                    </div>)
                }
            </>
        ) : null}
    </div>
}