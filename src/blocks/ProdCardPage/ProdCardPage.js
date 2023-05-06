import slideImg1 from '../../screen/prodpage.png'


import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {ProdCardHeaderBlock} from "../ProdCardHeaderBlock/ProdCardHeaderBlock";
import {PixelPerfect} from "../MainPage/MainPage";
import {ProdGalery} from "../ProdGalery/ProdGalery";
import {GameInfo} from "../GameInfo/GameInfo";
import {Recent} from "../Recent/Recent";
import {Review} from "../Review/Review";

export const ProdCardPage = (props) => {

  return (
    <div className="main-wrapper">
      <Header/>
      <main>
        <ProdCardHeaderBlock/>
        <ProdGalery/>
        <GameInfo/>
        <Recent title={'You may also like these games'}/>
        <Review/>
        <Recent title={'You recently viewed'}/>
      </main>
      <Footer/>
      {/*<PixelPerfect img={slideImg1}/>*/}
    </div>
  )
}