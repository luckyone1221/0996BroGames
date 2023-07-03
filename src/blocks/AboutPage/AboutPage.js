import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {BroHeaderBlock} from "../BroHeaderBlock/BroHeaderBlock";
import {PixelPerfect} from "../MainPage/MainPage";
import {WhyUs} from "../WhyUs/WhyUs";
import {ImgBox} from "../ImgBox/ImgBox";
import {SaveWater} from "../SaveWater/SaveWater";
import {WhatWeDo} from "../WhatWeDo/WhatWeDo";
import {Review} from "../Review/Review";
import {Fresh} from "../Fresh/Fresh";
import {HowItWorks} from "../HowItWorks/HowItWorks";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useTrackLang} from "../../Hooks/useTrackLang";

export const AboutPage = (props) => {
  const config = useSelector(state => state);
  const content = useSelector(state => state.content);
  const dispatch = useDispatch();

  const trackLang = useTrackLang();

  useEffect(() => {
    if(config.scrollTo){
      // document.querySelector(config.scrollTo).scrollIntoView();

      window.setTimeout(() => {
        window.scrollTo({
          top: document.querySelector(config.scrollTo).offsetTop - 100,
        })
        dispatch({type: "CHANGE_SCROLLTO", payload: ""});

      }, 100)
    }
  }, [])

  return(
    <div className="main-wrapper">
      <Header/>
      <main>
        <BroHeaderBlock/>
        <ImgBox/>
        <WhyUs/>
        <SaveWater/>
        <WhatWeDo/>
        <HowItWorks/>
        <Review itemId={content.feedBackFallBackId}/>
        <Fresh/>
      </main>
      <Footer/>
    </div>
  )
}