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
            //invalidatesTags:['Todo'],
            async onQueryStarted({ ...patch }, { dispatch, queryFulfilled }) {
                try {
                    const {data:newTodo} = await queryFulfilled
                    console.log('New todo ',newTodo);

                    const patchResult = dispatch(
                        backendApi.util.updateQueryData('getAllTodo', undefined, (draft) => {
                            //console.log('Draft ',draft);
                            //console.log('Patch ',patch);
                            draft.push(newTodo);
                        }),
                    );

                } catch {}
            }
        }),
        deleteTodo:builder.mutation<Todo, number>({
            query: (id:number) => ({
                url: `/api/todos/${id}`,
                method: 'DELETE',

            }),
            //invalidatesTags:['Todo'],
            //Pessimistic UI Rendering
            /*
            async onQueryStarted({ ...patch }, { dispatch, queryFulfilled }) {
                try {
                    const {data:deletedTodo} = await queryFulfilled
                    console.log('Deleted todo ',deletedTodo);
                    const patchResult = dispatch(
                        backendApi.util.updateQueryData('getAllTodo', undefined, (draft) => {
                            //console.log('Draft ',draft);
                            draft = draft.filter(todo=>todo._id != deletedTodo._id);
                            //console.log('Draft ',draft);
                            return draft;
                        }),
                    );

                } catch {}
            },*/
            //Optimistic

            async onQueryStarted(id:number , { dispatch, queryFulfilled }) {
                console.log('Id ',id);
                const patchResult = dispatch(
                    backendApi.util.updateQueryData('getAllTodo', undefined, (draft) => {
                        //console.log('Draft ',draft);
                        draft = draft.filter(todo=>todo._id != id);
                        //console.log('Draft ',draft);
                        return draft;
                    }),
                );
                try {
                    const {data:deletedTodo} = await queryFulfilled
                    console.log('Deleted todo ',deletedTodo);
                } catch {
                    patchResult.undo();
                }
            }
        }),
    }),
});
export const { useGetAllTodoQuery,useAddTodoMutation,useDeleteTodoMutation } = backendApi;