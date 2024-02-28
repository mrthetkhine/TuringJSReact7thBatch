import {backendApi} from "@/lib/redux/services/backendApi";
import {Movie, Review, Todo} from "@/lib/redux/services/types";
import {movieApi} from "@/lib/redux/services/movieApi";
export const reviewApi = backendApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllReviewByMovieId: builder.query<Array<Review>,string>({
            query: (movieId:string) => `/api/reviews/movie/${movieId}`,
            providesTags:['Review']
        }),
        addReview:builder.mutation<Review,Partial<Review>>({
            query: (review:Partial<Review>) => ({
                url: `/api/reviews`,
                method: 'POST',
                body:review,
            }),
            transformResponse: (response: any, meta, arg) => {
                console.log('Response ',response);
                //return response.map(user=>user.company);
                response.movie =response.movie._id;
                return response;
            },
            async onQueryStarted(rev:Review, { dispatch, queryFulfilled }) {
                console.log('onQueryStarted Review ',rev);

                try {
                    const {data:savedReview} = await queryFulfilled
                    console.log('Saved review ',savedReview);
                    const patchResult = dispatch(
                        reviewApi.util.updateQueryData('getAllReviewByMovieId', rev.movie, (draft) => {
                            draft.push(savedReview);
                            return draft;
                        }),
                    );
                } catch {
                    //patchResult.undo();
                }
            }
        }),
        deleteReview:builder.mutation<Review,Review>({
            query: (review:Review) => ({
                url: `/api/reviews/${review._id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(review:Review , { dispatch, queryFulfilled }) {
                console.log('Review ',review);
                const patchResult = dispatch(
                    reviewApi.util.updateQueryData('getAllReviewByMovieId', review.movie, (draft) => {
                        draft = draft.filter(rev=>rev._id != review._id);
                        return draft;
                    }),
                );
                try {
                    const {data:deletedReview} = await queryFulfilled
                    console.log('Deleted review ',deletedReview);
                } catch {
                    patchResult.undo();
                }
            }
        }),
    }),
    overrideExisting: false,

});
export const { useGetAllReviewByMovieIdQuery,useDeleteReviewMutation,useAddReviewMutation } = reviewApi;