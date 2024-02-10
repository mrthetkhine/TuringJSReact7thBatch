/* Instruments */
import { counterSlice } from "./slices";
import { todoSlice } from "./slices";
export const reducer = {
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
};
