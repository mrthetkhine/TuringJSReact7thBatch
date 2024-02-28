import {backendApi} from "@/lib/redux/services/backendApi";
import {AuthRequest, AuthResponse, Review} from "@/lib/redux/services/types";

export const authApi = backendApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse,AuthRequest>({
            query: (authRequest:AuthRequest) => ({
                url: `/api/users/login`,
                method: 'POST',
                body:authRequest,
            }),
            invalidatesTags:['Movie','Review','Todo','Auth'],
        }),
    }),
    overrideExisting: false,
});
export const { useLoginMutation}= authApi;