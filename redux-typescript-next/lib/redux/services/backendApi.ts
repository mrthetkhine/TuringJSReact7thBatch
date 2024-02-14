import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Todo} from "@/lib/redux/services/types";
import {userApi} from "@/lib/redux/services/users";

export const backendApi = createApi({
    reducerPath: 'backendApi',
    tagTypes: ['Todo'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: (builder) => ({
        getAllTodo: builder.query<Array<Todo>>({
            query: () => `/api/todos`,
            transformResponse: (response: Array<Todo>, meta, arg) => {
                console.log('Response ',response);
                //return response.map(user=>user.company);
                return response;
            },
            providesTags:['Todo']
        }),
        addTodo:builder.mutation<Todo, Partial<Todo>>({
            query: (todo:Partial<Todo>) => ({
                url: `/api/todos`,
                method: 'POST',
                body:todo,
            }),
            invalidatesTags:['Todo']
        }),

    }),
});
export const { useGetAllTodoQuery,useAddTodoMutation } = backendApi;