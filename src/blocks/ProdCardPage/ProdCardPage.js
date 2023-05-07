import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {ProdCardHeaderBlock} from "../ProdCardHeaderBlock/ProdCardHeaderBlock";
import {ProdGalery} from "../ProdGalery/ProdGalery";
import {GameInfo} from "../GameInfo/GameInfo";
import {Recent} from "../Recent/Recent";
import {Review} from "../Review/Review";
import {useLanguage} from "../../Hooks/UseLang";

export const ProdCardPage = (props) => {
  const lang = useLanguage();

  return (
    <div className="main-wrapper">
      <Header/>
      <main>
        <ProdCardHeaderBlock/>
        <ProdGalery/>
        <GameInfo/>
        <Recent title={lang.Recent.titleAlsoLike}/>
        <Review/>
        <Recent title={lang.Recent.titleRecent}/>
      </main>
      <Footer/>
    </div>
  )
}