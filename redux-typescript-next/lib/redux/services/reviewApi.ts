import {backendApi} from "@/lib/redux/services/backendApi";
import {Movie, Review} from "@/lib/redux/services/types";
import {movieApi} from "@/lib/redux/services/movieApi";
export const reviewApi = backendApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllReviewByMovieId: builder.query<Array<Review>,string>({
            query: (movieId:string) => `/api/reviews/movie/${movieId}`,
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
export const { useGetAllReviewByMovieIdQuery,useDeleteReviewMutation } = reviewApi;