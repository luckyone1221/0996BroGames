import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {InfoBlock} from "../InfoBlock/InfoBlock";

export const InfoPage = (props) => {

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