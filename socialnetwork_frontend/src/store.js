import { configureStore } from "@reduxjs/toolkit";

import LoginReducer from "./Reducer/LoginReducer";
import PostReducer from "./Reducer/PostReducer";

export default configureStore({
    reducer: {
        login: LoginReducer,
        posts: PostReducer
    }
})