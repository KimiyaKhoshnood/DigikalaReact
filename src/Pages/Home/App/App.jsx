import AmazingSuggestion from "../AmazingSuggestion/AmazingSuggestion"
import AmazingSupermarket from "../AmazingSupermarket/AmazingSupermarket"
import BannerSupermarket from "../BannerSupermarket/BannerSupermarket"
import BuyBySorting from "../BuyBySorting/BuyBySorting"
import FourPicsBox from "../FourPicsBox/FourPicsBox"
import Header from "../Header/Header"
import Highlights from "../Highlights/Highlights"
import MainSwipper from "../MainSwipper/MainSwipper"
import UserStories from "../UserStories/UserStories"

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
      </div>
    </>
  )
}

export default App
