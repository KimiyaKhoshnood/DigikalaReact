import AmazingSuggestion from "../AmazingSuggestion/AmazingSuggestion"
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
        <Highlights/>
        <AmazingSuggestion/>
      </div>
    </>
  )
}

export default App
