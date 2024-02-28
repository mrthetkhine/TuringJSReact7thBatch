import {AuthResponse} from "@/lib/redux/services/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Todo} from "@/lib/redux";

const initialState:AuthResponse = {
    token:''
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthResponse>) => {
            state.token =  action.payload.token;
        },
        logout: (state) => {
            state.token ='';
        }
    },
});