import { configureStore } from "@reduxjs/toolkit"
import PostReducer from "./Posts/PostReducer"
const store = configureStore({
  reducer: {
    home: PostReducer,
  }
})

export default store