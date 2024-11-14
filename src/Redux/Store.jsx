import { configureStore } from "@reduxjs/toolkit"
import PostReducer from "./Posts/PostReducer"
import FooterReducer from "./Posts/FooterReducer"
const store = configureStore({
  reducer: {
    home: PostReducer,
    footer: FooterReducer
  }
})

export default store