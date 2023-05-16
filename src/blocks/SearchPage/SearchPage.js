import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {Search} from "./Search";

export const SearchPage = (props) => {

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