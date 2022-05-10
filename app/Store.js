import { configureStore } from "@reduxjs/toolkit";
import AllDetailsReducer from "./Slice";

export default configureStore({
    reducer: {
        allDetail: AllDetailsReducer
    }
})