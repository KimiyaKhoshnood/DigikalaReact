import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home/Home"
import RouterProducts from "../Pages/Product/RouterProducts/RouterProducts"
import OnlineSupport from "../Components/OnlineSupport/OnlineSupport"
import Login from "../Pages/Login/Login"


function App() {

  return (
    <>
      <div dir="rtl">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/*" element={<RouterProducts />}/>
          <Route path="/login/" element={<Login />}/>
        </Routes>
        </BrowserRouter>
        <OnlineSupport/>
      </div>
    </>
  )
}

export default App
