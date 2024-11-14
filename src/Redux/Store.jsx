import { configureStore } from "@reduxjs/toolkit"
import PostReducer from "./Posts/PostReducer"
import FooterReducer from "./Posts/FooterReducer"
import HeaderReducer from "./Posts/HeaderReducer"
import ProductReducer from "./Posts/ProductReducer"
const store = configureStore({
  reducer: {
    home: PostReducer,
    footer: FooterReducer,
    header: HeaderReducer,
    product: ProductReducer
  }
})

export default store