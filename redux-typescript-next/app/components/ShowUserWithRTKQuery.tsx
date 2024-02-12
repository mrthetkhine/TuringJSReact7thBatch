"use client";
import {useGetAllUserQuery, useGetUserByIdQuery} from "@/lib/redux/services/users";

export default function ShowUserWithRTKQuery()
{
    const { data, error, isLoading } = useGetUserByIdQuery(1);
    return <div>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
                {
                    <h1>{data.name}</h1>
                }
            </>
        ) : null}
    </div>
}