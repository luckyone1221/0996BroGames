import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Search} from "./Search";
import {useTrackLang} from "../../Hooks/useTrackLang";

export const SearchPage = (props) => {
  const trackLang = useTrackLang();

  return(
    <div className="main-wrapper main-wrapper--catalog">
      <Header/>
      <main>
        <Search/>
      </main>
      <Footer/>
    </div>
  )
}