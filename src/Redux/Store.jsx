import { configureStore } from "@reduxjs/toolkit"
import PostReducer from "./Posts/PostReducer"
const store = configureStore({
  reducer: {
    posts: PostReducer,
  }
})

export default store