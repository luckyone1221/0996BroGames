import {Header} from "../Header/Header";

import ppImg from "../../screen/01.png";
import {HeaderBlock} from "../HeaderBlock/HeaderBlock";
import {Digits} from "../sDigits/sDigits";
import {Catalog} from "../Catalog/Catalog";
import {PreOrder} from "../PreOrder/PreOrder";
import {Recent} from "../Recent/Recent";
import {WhyUs} from "../WhyUs/WhyUs";
import {Review} from "../Review/Review";
import {Fresh} from "../Fresh/Fresh";
import {Footer} from "../Footer/Footer";
import {useLanguage} from "../../Hooks/UseLang";
import {useTrackRecent} from "../../Hooks/useTrackRecent";
import {useSelector} from "react-redux";
import {useTrackLang} from "../../Hooks/useTrackLang";

export const MainPage = (props) => {
  const content = useSelector(state => state.content);
  const lang = useLanguage();
  const recentIdList = useTrackRecent();
  const trackLang = useTrackLang();

  return(
    <div className="main-wrapper">
      <Header/>
      <main>
        <HeaderBlock/>
        <Digits/>
        <Catalog/>
        <PreOrder/>
        {recentIdList.length > 4 && (
          <Recent itemsList={recentIdList}/>
        )}
        <WhyUs/>
        <Review itemId={content.feedBackFallBackId}/>
        <Fresh/>
        <Footer/>
      </main>
      <PixelPerfect img={ppImg}/>
    </div>
  )
}

export const PixelPerfect = (props) => {
  const {img} = props;

  return(
    <div className="pixel-perfect">
      <img src={img} alt=""/>
    </div>
  )
}