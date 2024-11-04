import { Route, Routes } from "react-router-dom"
import Product from "../Product/Product"

const RouterProducts = () => {
  return (
    <Routes>
        <Route path="/" element={<Product/>}/>
        {/* <Route path="/:id" element={}/> */}
    </Routes>
  )
}

export default RouterProducts