import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {UserModel} from "@/lib/redux/services/types";
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getAllUser: builder.query<Array<UserModel>>({
            query: () => `users`,
        }),
    }),
})
export const { useGetAllUserQuery } = userApi