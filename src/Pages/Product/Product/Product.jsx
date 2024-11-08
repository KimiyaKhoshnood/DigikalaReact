import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import OnlineSupport from "../../../Components/OnlineSupport/OnlineSupport";
import Address from "../Address/Address";
import BoughtTogether from "../BoughtTogether/BoughtTogether";
import DetailsSection from "../DetailsSection/DetailsSection";
import DigikalaAdvantages from "../DigikalaAdvantages/DigikalaAdvantages";
import MainProductInfo from "../MainProductInfo/MainProductInfo";
import PindoRelated from "../PindoRelated/PindoRelated";
import ProductSellers from "../ProductSellers/ProductSellers";
import ProductSwiper from "../ProductSwiper/ProductSwiper";
import RelatedTags from "../RelatedTags/RelatedTags";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import SimilarProducts from "../SimilarProducts/SimilarProducts";

const Product = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <Address />
        <MainProductInfo />
        <DigikalaAdvantages />
        <ProductSellers />
        <SimilarProducts />
        <RelatedVideos />
        <RelatedTags />
        <PindoRelated />
        <ProductSwiper />
        <DetailsSection/>
        <BoughtTogether/>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
