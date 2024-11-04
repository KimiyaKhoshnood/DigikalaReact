import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home/Home"
import RouterProducts from "../Pages/Product/RouterProducts/RouterProducts"
import OnlineSupport from "../Components/OnlineSupport/OnlineSupport"


function App() {

  return (
    <>
      <div dir="rtl">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/*" element={<RouterProducts />}/>
        </Routes>
        </BrowserRouter>
        <OnlineSupport/>
      </div>
    </>
  )
}

export default App
