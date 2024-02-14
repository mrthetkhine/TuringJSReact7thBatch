import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {UserModel} from "@/lib/redux/services/types";
export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['User'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    keepUnusedDataFor: 5,
    endpoints: (builder) => ({
        getAllUser: builder.query<Array<UserModel>>({
            query: () => `users`,
            transformResponse: (response: Array<UserModel>, meta, arg) => {
                console.log('Response ',response);
                //return response.map(user=>user.company);
                return response;
            },
            providesTags:['User']
        }),
        getUserById:builder.query<UserModel,number>({
            query: (userId:number) => `users/${userId}`,
        }),
        deleteUserById: builder.mutation<UserModel,number>({
            query: (id:number) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
    }),
})
export const { useGetAllUserQuery,useGetUserByIdQuery,useDeleteUserByIdMutation } = userApi