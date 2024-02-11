/* Instruments */
import { counterSlice } from "./slices";
import { todoSlice } from "./slices";
import {userApi} from "@/lib/redux/services/users";
export const reducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
};
