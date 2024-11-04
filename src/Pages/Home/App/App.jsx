import AmazingSuggestion from "../AmazingSuggestion/AmazingSuggestion"
import AmazingSupermarket from "../AmazingSupermarket/AmazingSupermarket"
import BannerSupermarket from "../BannerSupermarket/BannerSupermarket"
import Blog from "../Blog/Blog"
import BuyBySorting from "../BuyBySorting/BuyBySorting"
import Digiclub from "../Digiclub/Digiclub"
import Footer from "../Footer/Footer"
import FourPicsBox from "../FourPicsBox/FourPicsBox"
import Header from "../Header/Header"
import Highlights from "../Highlights/Highlights"
import MainSwipper from "../MainSwipper/MainSwipper"
import PopularBrands from "../PopularBrands/PopularBrands"
import SellSelection from "../SellSelection/SellSelection"
import TwoPicsBox from "../TwoPicsBox/TwoPicsBox"
import UserStories from "../UserStories/UserStories"
import YourIntrest from "../YourIntrest/YourIntrest"

function App() {

  return (
    <>
      <div dir="rtl">
        <Header/>
        <UserStories/>
        <MainSwipper/>
        <BannerSupermarket/>
        <Highlights/>
        <AmazingSuggestion/>
        <AmazingSupermarket/>
        <FourPicsBox/>
        <BuyBySorting/>
        <TwoPicsBox/>
        <PopularBrands/>
        <TwoPicsBox/>
        <YourIntrest/>
        <Digiclub/>
        <YourIntrest/>
        <SellSelection/>
        <Blog/>
        <hr className="lg:block hidden"/>
        <Footer/>
      </div>
    </>
  )
}

export default App
