import {backendApi} from "@/lib/redux/services/backendApi";
import {Movie, Todo} from "@/lib/redux/services/types";
const movieApi = backendApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovie: builder.query({
            query: () => '/api/movies',
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
                            //console.log('Draft ',draft);
                            //console.log('Patch ',patch);
                            draft.push(newMovie);
                        }),
                    );

                } catch {}
            }
        }),
    }),
    overrideExisting: false,
})

export const { useGetAllMovieQuery,useAddMovieMutation } = movieApi;