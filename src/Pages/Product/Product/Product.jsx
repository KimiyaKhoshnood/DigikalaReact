import Footer from "../../../Components/Footer/Footer"
import Header from "../../../Components/Header/Header"
import OnlineSupport from "../../../Components/OnlineSupport/OnlineSupport"
import Address from "../Address/Address"
import MainProductInfo from "../MainProductInfo/MainProductInfo"

const Product = () => {
  return (
    <div>
        <Header/>
        <div className="flex flex-col items-center">
            <Address/>
            <MainProductInfo/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Product