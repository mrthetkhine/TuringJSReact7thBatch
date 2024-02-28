import {backendApi} from "@/lib/redux/services/backendApi";
import {Movie, Todo} from "@/lib/redux/services/types";
export const movieApi = backendApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovie: builder.query({
            query: () => '/api/movies',
            providesTags:['Movie']
        }),
        addMovie:builder.mutation<Movie, Partial<Movie>>({
            query: (movie:Partial<Movie>) => ({
                url: `/api/movies`,
                method: 'POST',
                body:movie,
            }),
            //invalidatesTags:['Movie'],
            async onQueryStarted({ ...patch }, { dispatch, queryFulfilled }) {
                try {
                    const {data:newMovie} = await queryFulfilled
                    console.log('New todo ',newMovie);

                    const patchResult = dispatch(
                        backendApi.util.updateQueryData('getAllMovie', undefined, (draft) => {
                            draft.push(newMovie);
                            return draft;
                        }),
                    );

                } catch {}
            }
        }),
        editMovie:builder.mutation<Movie, Partial<Movie>>({
            query: (movie:Partial<Movie>) => ({
                url: `/api/movies/${movie._id}`,
                method: 'PUT',
                body:movie,
            }),
            //invalidatesTags:['Movie'],
            async onQueryStarted({ ...patch }, { dispatch, queryFulfilled }) {
                try {
                    const {data:updateMovie} = await queryFulfilled
                    console.log('Update movie ',updateMovie);
                    const patchResult = dispatch(
                        backendApi.util.updateQueryData('getAllMovie', undefined, (draft) => {
                            draft = draft.map(movie=>movie._id==updateMovie._id?updateMovie:movie);
                            return draft;
                        }),
                    );

                } catch {}
            }
        }),
        deleteMovie:builder.mutation<Movie,string>({
            query: (movieId:string) => ({
                url: `/api/movies/${movieId}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id:string , { dispatch, queryFulfilled }) {
                console.log('Id ',id);
                const patchResult = dispatch(
                    backendApi.util.updateQueryData('getAllMovie', undefined, (draft) => {
                        draft = draft.filter(movie=>movie._id != id);
                        return draft;
                    }),
                );
                try {
                    const {data:deleteMovie} = await queryFulfilled
                    console.log('Deleted movie ',deleteMovie);
                } catch {
                    patchResult.undo();
                }
            }
        }),
    }),
    overrideExisting: false,
})

export const { useGetAllMovieQuery,useAddMovieMutation,useEditMovieMutation, useDeleteMovieMutation } = movieApi;