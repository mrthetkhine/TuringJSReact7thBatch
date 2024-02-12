"use client";
import {useGetAllUserQuery} from "@/lib/redux/services/users";

export default function UserWithRTKQueryDemo()
{
    const { data, error, isLoading } = useGetAllUserQuery();
    return <div>
        {error ? (
            <>Oh no, there was an error</>
        ) : isLoading ? (
            <>Loading...</>
        ) : data ? (
            <>
                {
                    data.map(user=><div key={user.id}>
                        {user.name}

                    </div>)
                }
            </>
        ) : null}
    </div>
}