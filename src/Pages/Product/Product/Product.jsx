import Footer from "../../../Components/Footer/Footer"
import Header from "../../../Components/Header/Header"
import OnlineSupport from "../../../Components/OnlineSupport/OnlineSupport"
import Address from "../Address/Address"
import DigikalaAdvantages from "../DigikalaAdvantages/DigikalaAdvantages"
import MainProductInfo from "../MainProductInfo/MainProductInfo"
import ProductSellers from "../ProductSellers/ProductSellers"
import SimilarProducts from "../SimilarProducts/SimilarProducts"

const Product = () => {
  return (
    <div>
        <Header/>
        <div className="flex flex-col items-center">
            <Address/>
            <MainProductInfo/>
            <DigikalaAdvantages/>
            <ProductSellers/>
            <SimilarProducts/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Product