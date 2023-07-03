import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {InfoBlock} from "../InfoBlock/InfoBlock";
import {useTrackLang} from "../../Hooks/useTrackLang";

export const InfoPage = (props) => {
  const trackLang = useTrackLang();

  return (
    <div className="main-wrapper main-wrapper--catalog">
      <Header/>
      <main>
        <InfoBlock/>
      </main>
      <Footer/>
    </div>
  )
}